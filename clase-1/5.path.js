const path = require('node:path')

// get the separate slash for the path base on the OS
console.log(path.sep)

// join the path  
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// get the file of a define path
const base = path.basename('/tmp/secrets/password.txt')
console.log(base)

// get the file of a define path but without the extention of the file
const filename = path.basename('/tmp/secrets/password.txt', '.txt')
console.log(filename)

// get the file extention of a define path but
const extention = path.extname('my.super.img-fg.png')
console.log(extention)
