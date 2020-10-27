#!/usr/bin/env node

/*
 * A quick-and-dirty script that inspects the dependencies section of the project's package.json looking for license
 * information. It will spit out a formatted attributions report as well as alerts and errors for partially found
 * or not found information.
 *
 * Where does it look?
 * It looks inside the node_modules folder (so you need to have everything installed) for:
 *   a 'LICENSE' file
 *   a 'license.md' file
 *   a 'License' header in 'readme.md'
 *   a license entry in the package's package.json
 *   (In the last two cases it marks the information as "incomplete - requires manual check)
 *
 * How to use?
 * Having flipkit installed in your project, you can run ./node_modules/.bin/attribution-gen. It will look out for a
 * package.json on the root folder of the project or you can specify one as the argument.
 *
 * Where is the report saved?
 * Right now I'm not saving the file. What I recommend is piping the output to a file or to your clipboard:
 * attribution-gen | pbcopy (mac only)
 * The alerts and errors are not piped, they will only show on screen.
 */

/* eslint-disable class-methods-use-this, no-param-reassign, no-restricted-syntax, consistent-return */
const { promisify } = require('util');
const fs = require('fs');
const mdExtract = require('markdown-extract');
const chalk = require('chalk');

const publicLicenses = require('./attribution-gen/licenses');

const readFileAsync = promisify(fs.readFile);

class AttributionGenerator {
  constructor() {
    this.header = '';
    this.body = '';

    this.readLicense = this.readLicense.bind(this);
  }

  parseAuthor(author) {
    if (typeof author === 'string') {
      return author;
    } else if (author.name) {
      let returnAuthor = author.name;
      if (author.email) returnAuthor += ` <${author.email}>`;
      if (author.url) returnAuthor += ` (${author.url})`;
      return returnAuthor;
    }
  }

  appendToHeader(packageName, license, version) {
    this.header += `
- ${packageName} v${version}`;
  }

  appendToBody(packageName, license, url, version) {
    if (!license) {
      license = '!!!!!! MISSING LICENSE !!!!!!';
    }
    if (!url) {
      url = '!!!!!! MISSING URL !!!!!!';
    }
    this.body += `
## ${packageName} v${version}

<${url}>

${license}
`;
  }

  logRequireManualCheck(packageName, critical = false, type = 'License') {
    if (critical) {
      console.error(chalk.red(`No ${type} found for ${packageName}.`));
    } else {
      console.warn(chalk.yellow(`Incomplete ${type} found for ${packageName}.`));
    }
  }

  async readLicense(packageName) {
    let license = null;
    let projectURL = null;
    let projectVersion = null;
    // First we try to locate a LICENCE file
    license = await readFileAsync(`./node_modules/${packageName}/license`, { encoding: 'utf8' }).catch(e => null);

    // Then maybe license.md?
    if (license === null)
      license = await readFileAsync(`./node_modules/${packageName}/license.md`, { encoding: 'utf8' }).catch(e => null);

    await readFileAsync(`./node_modules/${packageName}/package.json`, { encoding: 'utf8' }).then(fileContents => {
      const data = JSON.parse(fileContents);

      projectURL = data.homepage || (data.repository && data.repository.url);

      projectVersion = data.version;

      // If license haven't been found yet, try reading the `license` on package.json
      if (license === null && data.license) {
        license = data.author ? publicLicenses(data.license, this.parseAuthor(data.author)) : data.license;
        this.logRequireManualCheck(packageName);
      }
    });

    // What about a license paragraph in your README?
    if (license === null)
      license = await readFileAsync(`./node_modules/${packageName}/readme.md`, { encoding: 'utf8' })
        .then(contents => {
          const parsedContents = mdExtract({ gnp: true, type: 'heading', text: /License/ }, contents);
          if (parsedContents.length > 0) {
            this.logRequireManualCheck(packageName);
            return parsedContents.join('\n');
          }
          return null;
        })
        .catch(e => null);

    if (license === null) this.logRequireManualCheck(packageName, true);
    if (!projectURL) this.logRequireManualCheck(packageName, true, 'URL');
    if (!projectVersion) this.logRequireManualCheck(packageName, true, 'package version');

    return { packageName, license, projectURL, version: projectVersion };
  }

  outputFormatted() {
    const disclaimer = `ATTENTION - THIS DIRECTORY CONTAINS THIRD PARTY OPEN SOURCE MATERIALS or THIS PROJECT CONTAINS BUILD SCRIPTS AND TOOLS
THAT MAKE USE OF OPEN SOURCE DEVELOPMENT TOOLS or THIS PROJECT CONTAINS OPEN SOURCE HEADER FILES THAT ARE CONSUMED
DURING COMPILATION AND LINK TO OPEN SOURCE LIBRARIES AT RUN TIME: THEY ARE CLEARED ONLY FOR LIMITED USE BY Flipgrid,
Inc. FOR THE PRODUCTS LISTED BELOW. DO NOT USE OR SHARE THIS CODE WITHOUT APPROVAL PURSUANT TO THE OPEN SOURCE SOFTWARE
APPROVAL POLICY.

`;

    const headerTitle = `# Open Source Materials
`;

    const bodyTitle = `

# Licenses
`;

    return disclaimer + headerTitle + this.header + bodyTitle + this.body;
  }

  getReport(packages) {
    const licencesP = packages.map(this.readLicense);
    Promise.all(licencesP).then(LicensesArr => {
      LicensesArr.forEach(({ packageName, license, projectURL, version }) => {
        this.appendToHeader(packageName, license, version);
        this.appendToBody(packageName, license, projectURL, version);
      });
      console.log(this.outputFormatted());
    });
  }
}

const ag = new AttributionGenerator();

const args = process.argv.slice(2);
const packagejson = args[0] || './package.json';

readFileAsync(packagejson, { encoding: 'utf8' })
  .then(fileContents => {
    const data = JSON.parse(fileContents);
    ag.getReport(Object.keys(data.dependencies).concat(Object.keys(data.devDependencies)));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
