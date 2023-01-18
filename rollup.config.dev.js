import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default [
  {
    input: "./src/ts/script.ts",
    output: {
      dir: "./out",
      format: "iife",
    },
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      copy({
        targets: [{ src: "src/assets/**/*", dest: "out" }],
      }),
    ],
  },
];
