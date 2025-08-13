/* global process */

import { build, } from "esbuild";
import istanbulPkg from "esbuild-plugin-istanbul";
import fs from "node:fs";
import path from "node:path";

const isCoverage = process.env.COVERAGE === "1";
const outdir = path.resolve("dist",);
if (! fs.existsSync(outdir,)) {
    fs.mkdirSync(outdir,);
}

const plugins = [];
if (isCoverage) {
    const istanbul = istanbulPkg.default?.esbuildPluginIstanbul ?? istanbulPkg.esbuildPluginIstanbul;
    const pluginObj = istanbul({
        name: "istanbul",
        // ESBuild's JavaScript parser doesn't support the `v` flag for Unicode regexes.
        // eslint-disable-next-line require-unicode-regexp
        filter: /\.js$/,
        loader: "js",
    },);
    plugins.push({ name: pluginObj.name || "istanbul", setup: pluginObj.setup, },);
}

await build({
    entryPoints: ["src/saulabhya.js",],
    bundle: true,
    format: "esm",
    minify: ! isCoverage,
    target: "esnext",
    outfile: "dist/saulabhya.min.js",
    plugins,
},);
