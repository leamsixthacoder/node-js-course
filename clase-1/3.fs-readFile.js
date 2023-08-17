const fs = require('node:fs')

console.log('Reading first archive.......')
fs.readFile('./archive.txt', 'utf-8', (_err, text) => {
  console.log(text)
})

console.log('Doing things while readind archive')

console.log('Reading second archive.......')
fs.readFile('./archive2.txt', 'utf-8', (_err, text) => {
  console.log(text)
})
