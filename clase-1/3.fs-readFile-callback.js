const fs = require("node:fs")

console.log("Reading first file.......")
fs.readFile("./archive.txt", "utf-8", (_err, text) => {
  console.log(text)
});

console.log("Doing things while readind file");

console.log("Reading second file.......");
fs.readFile("./archive2.txt", "utf-8", (_err, text) => {
  console.log(text)
})