import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

const external = [
  ...(pkg.dependencies ? Object.keys(pkg.dependencies) : []),
  ...(pkg.devDependencies ? Object.keys(pkg.devDependencies) : []),
  ...(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : []),
];

const baseOutput = {
  dir: "lib",
  sourcemap: true,
  exports: "named",
};

const plugins = [
  postcss({
    modules: false, // Используем SCSS, не модули
    extract: true,
    minimize: true,
    inject: false,
    use: ["sass"],
  }),
  resolve({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  }),
  commonjs(),
  typescript({
    outDir: "lib",
    declarationDir: "lib",
    declaration: true,
    exclude: [
      "src/playground/**",
      "**/*.stories.tsx",
      "**/*.test.tsx",
      "**/__snapshots__/**",
    ],
    rootDir: "src",
  }),
];

export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        ...baseOutput,
        format: "esm",
      },
      {
        ...baseOutput,
        format: "cjs",
        entryFileNames: "[name].cjs",
      },
    ],
    external,
    plugins,
  },
];
