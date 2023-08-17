import { readFile } from 'node:fs/promises'

Promise.all([

  readFile('./archive.txt', 'utf-8'),
  readFile('./archive2.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('first text: ', text)
  console.log('second text: ', secondText)
})
