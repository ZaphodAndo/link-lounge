import { readFile } from "node:fs/promises";

export async function getData() {
    const data = await readFile("./data.json", "utf8");
    return JSON.parse(data);
}
