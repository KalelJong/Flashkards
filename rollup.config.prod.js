import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/ts/script.ts",
    output: {
      dir: "./build",
      format: "iife",
    },
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      copy({
        targets: [{ src: "src/assets/**/*", dest: "build" }],
      }),
      terser(),
    ],
  },
];
