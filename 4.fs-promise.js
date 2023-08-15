const fs = require("node:fs/promises");

console.log("Reading first archive...");
fs.readFile("./archive.txt", "utf-8").then((text) => {
  console.log("first text: ", text);
});

console.log("Doing things while readind archive");

console.log("Reading second archive.......");
fs.readFile("./archive2.txt", "utf-8").then((text) => {
  console.log("second text: ", text);
});
