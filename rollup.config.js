import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";
import pkg from "./package.json";

export default [
  {
    input: "src/index.js",
    plugins: [
      vue(),
      babel({ exclude: "node_modules/**" }),
      resolve({ mainFields: ["module", "jsnext", "main", "browser"] }),
      commonjs()
    ],
    output: {
      exports: "named",
      name: "VueGridResponsive",
      file: pkg.unpkg,
      format: "iife",
      sourcemap: true
    },
    watch: {
      include: "src/**"
    }
  },
  {
    input: "./src/index.js",
    plugins: [
      vue(),
      babel({ exclude: "node_modules/**" }),
      resolve({ mainFields: ["module", "jsnext", "main", "browser"] }),
      commonjs()
    ],
    output: {
      name: "VueGridResponsive",
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  },
  {
    input: "./src/index.js",
    plugins: [
      vue(),
      babel({ exclude: "node_modules/**" }),
      resolve({ mainFields: ["module", "jsnext", "main", "browser"] }),
      commonjs()
    ],
    output: {
      exports: "named",
      name: "VueGridResponsive",
      file: pkg.main,
      format: "umd",
      sourcemap: true
    }
  }
];
