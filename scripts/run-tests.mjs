/* global process */

import http from "node:http";
import { readFile, writeFile, mkdir, } from "node:fs/promises";
import { existsSync, } from "node:fs";
import path from "node:path";
import qunit from "node-qunit-puppeteer";
import puppeteer from "puppeteer";

const HttpCodes = {
    success: 200,
    notFound: 404,
};

const port = 54320;

const server = http.createServer(async (req, res,) => {
    try {
        let urlPath = req.url === "/" ? "/test/test.html" : req.url;
        // During coverage runs, map source module to the instrumented bundle
        if (process.env.COVERAGE === "1" && urlPath === "/src/saulabhya.js") {
            urlPath = "/dist/saulabhya.min.js";
        }
        const filePath = path.resolve(`.${urlPath}`,);
        const content = await readFile(filePath,);

        let contentType = "text/plain";
        if (filePath.endsWith(".html",)) {
            contentType = "text/html";
        } else if (filePath.endsWith(".js",)) {
            contentType = "text/javascript";
        } else if (filePath.endsWith(".css",)) {
            contentType = "text/css";
        }

        res.writeHead(HttpCodes.success, { "Content-Type": contentType, },);
        res.end(content,);
    } catch {
        res.writeHead(HttpCodes.notFound,);
        res.end("Not found",);
    }
},);

await new Promise(resolve => {
    server.listen(port, resolve,);
},);

// Launch browser; prefer system Chrome if provided
const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    args: ["--no-sandbox",],
},);

const page = await browser.newPage();
// eslint-disable-next-line init-declarations
let result;
try {
    result = await qunit.runQunitWithPage(page, {
        targetUrl: `http://localhost:${port}/test/test.html`,
        timeout: 30000,
        puppeteerArgs: [],
    },);
} finally {
    // Pull coverage (if any) from the page and persist for nyc
    try {
        const coverage = await page.evaluate(() => (globalThis.__coverage__ || window.__coverage__ || null),);
        if (coverage) {
            if (! existsSync(".nyc_output",)) {
                await mkdir(".nyc_output",);
            }
            await writeFile(".nyc_output/out.json", JSON.stringify(coverage,),);
        }
    } catch {
        // Empty
    }
    if (browser) {
        await browser.close();
    }
}

server.close();

if (! result.stats || result.stats.failed > 0) {
    console.error("Test run failed.", result,);
    process.exit(1,);
}

console.log("All tests passed.",);
