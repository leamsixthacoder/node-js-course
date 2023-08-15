import { readFile } from "node:fs/promises";

console.log("Reading first archive...");
const text = await readFile("./archive.txt", "utf-8");
console.log("first text: ", text);

console.log("Doing things while readind archive");

console.log("Reading second archive.......");
const secondText = await readFile("./archive2.txt", "utf-8");
console.log("second text: ", secondText);
