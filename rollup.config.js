import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const mode = process.env.NODE_ENV || 'development';

process.env.NODE_ENV = mode;
process.env.BABEL_ENV = mode;

const externalList = ['react', 'react-dom', 'prop-types', 'animejs'];

const pluginList = [
  typescript({
    clean: true,
    tsconfig: './tsconfig.json',
    useTsconfigDeclarationDir: true,
  }),
  peerDepsExternal(),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    presets: ['@babel/preset-env'],
  }),
  resolve(),
  commonjs({
    include: 'node_modules/**',
    namedExports: {
      'node_modules/react-is/index.js': ['isValidElementType'],
    },
  }),
  filesize(),
];

export default [
  {
    input: {
      Button: 'src/Button/Button.tsx',
      Input: 'src/Input/Input.js',
    },
    output: {
      dir: 'components',
      format: 'cjs',
    },
    external: externalList,
    plugins: pluginList,
  },
];
