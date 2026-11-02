import { build, } from "esbuild";
import istanbulPkg from "esbuild-plugin-istanbul";
import fs from "node:fs";
import path from "node:path";

const outdir = path.resolve("dist",);
if (! fs.existsSync(outdir,)) {
    fs.mkdirSync(outdir,);
}

const istanbul = istanbulPkg.default?.esbuildPluginIstanbul ?? istanbulPkg.esbuildPluginIstanbul;
const pluginObj = istanbul({
    name: "istanbul",
    // ESBuild's JavaScript parser doesn't support the `v` flag for Unicode regexes.
    // eslint-disable-next-line require-unicode-regexp
    filter: /\.js$/,
    loader: "js",
},);

await build({
    entryPoints: ["src/saulabhya.js",],
    bundle: true,
    format: "esm",
    target: "esnext",
    outfile: "dist/saulabhya.js",
    plugins: [{ name: pluginObj.name || "istanbul", setup: pluginObj.setup, },],
},);
