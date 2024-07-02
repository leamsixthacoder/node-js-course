const fs = require('node:fs/promises')

// IIFE - Inmmediatly Invoked Function Expression
;(async () => {
  console.log('Reading first archive...')
  const text = await fs.readFile('./archive.txt', 'utf-8')
  console.log('first text: ', text)

  console.log('Doing things while readind archive')

  console.log('Reading second archive.......')
  const secondText = await fs.readFile('./archive2.txt', 'utf-8')
  console.log('second text: ', secondText)
})()
