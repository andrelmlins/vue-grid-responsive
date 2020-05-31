import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const app = {
  input: 'docs/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    vue(),
    babel({ exclude: 'node_modules/**' }),
    resolve({ mainFields: ['module', 'jsnext', 'main', 'browser'] }),
    commonjs(),
    serve(),
    livereload('public'),
    terser(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    })
  ],
  watch: {
    clearScreen: false
  }
};

const library = [
  {
    input: 'src/index.js',
    plugins: [
      vue(),
      babel({ exclude: 'node_modules/**' }),
      resolve({ mainFields: ['module', 'jsnext', 'main', 'browser'] }),
      commonjs()
    ],
    output: {
      exports: 'named',
      name: 'VueGridResponsive',
      file: pkg.unpkg,
      format: 'iife',
      sourcemap: true
    },
    watch: {
      include: 'src/**'
    }
  },
  {
    input: './src/index.js',
    plugins: [
      vue(),
      babel({ exclude: 'node_modules/**' }),
      resolve({ mainFields: ['module', 'jsnext', 'main', 'browser'] }),
      commonjs()
    ],
    output: {
      name: 'VueGridResponsive',
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  },
  {
    input: './src/index.js',
    plugins: [
      vue(),
      babel({ exclude: 'node_modules/**' }),
      resolve({ mainFields: ['module', 'jsnext', 'main', 'browser'] }),
      commonjs()
    ],
    output: {
      exports: 'named',
      name: 'VueGridResponsive',
      file: pkg.main,
      format: 'umd',
      sourcemap: true
    }
  }
];

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}

const config = process.env.ROLLUP_WATCH ? app : library;

export default config;
