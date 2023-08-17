const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error when tried to read the dir: ', err)
    return
  }

  files.forEach(file => {
    console.log(file)
  })
})
