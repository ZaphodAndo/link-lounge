import { createInterface } from "node:readline/promises";
import { writeFile } from "node:fs/promises";
import { getData } from "./src/functions/getData.js";

const handleTermination = () => {
    process.exit(1);
};

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const title = await readline.question("Please enter a title: ").catch(handleTermination);
const url = await readline.question("Please enter a url: ").catch(handleTermination);
const note = await readline.question("Please enter a note: ").catch(handleTermination);
const tags = await readline.question("Please enter tags: ").catch(handleTermination);

const newLink = {
    title: title,
    url: url,
    note: note,
    tags: tags.split(","),
    createdAt: new Date().toISOString()
}

const data = await getData();
data.push(newLink);

await writeFile("./data.json", JSON.stringify(data), "utf8");

process.exit(1);
