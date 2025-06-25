import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { writeFile } from "node:fs/promises";
import { content } from "./src/content.js";

const dir = dirname(fileURLToPath(import.meta.url));

try {
    console.log("Building Link Lounge...");
    console.time("Built in");
    await writeFile(`${dir}/dist/index.html`, content, "utf8");
    console.timeEnd("Built in");
} catch (error) {
    console.error(error);
}
