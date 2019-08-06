import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  onwarn: function (message) {
  if (message.code === 'CIRCULAR_DEPENDENCY') {
    return;
  }
  console.error(message);
  },
  input: 'public/js/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    name: 'test'
  },
  plugins: [ json(), resolve(), commonjs() ]
};