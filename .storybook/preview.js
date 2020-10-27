import { configure } from '@storybook/react';

import '../local/styles/index.scss';
function storyConfig() {
  // add -focusVisible class to storybook body element
  document.body.className += ' ' + '-focusVisible';

  const stories = [];

  const reqDocs = require.context('../local/docs/', true, /\.stories\.mdx$/);
  reqDocs.keys().forEach(fname => stories.push(reqDocs(fname)));

  const reqComponents = require.context('../src', true, /\.stories\.mdx$/);
  reqComponents.keys().forEach(fname => stories.push(reqComponents(fname)));

  return stories;
}
configure(storyConfig, module);
