import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import replace from 'rollup-plugin-replace';
import css from 'rollup-plugin-css-only';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

const watch = process.env.ROLLUP_WATCH;

const app = {
  input: 'docs/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js'
  },
  plugins: [
    vue({
      css: false,
      style: {
        postcssPlugins: [autoprefixer]
      }
    }),
    css({
      entry: 'docs/main.js',
      dest: 'public/build/bundle.css'
    }),
    babel({ exclude: 'node_modules/**' }),
    resolve({ mainFields: ['module', 'jsnext', 'main', 'browser'] }),
    commonjs(),
    watch && serve(),
    watch && livereload('public'),
    !watch && terser(),
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

const config = watch ? app : [...library, app];

export default config;
