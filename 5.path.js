const path = require('node:path')

console.log(path.sep)

const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath)

const base = path.basename('/tmp/secrets/password.txt')
console.log(base)

const filename = path.basename('/tmp/secrets/password.txt' , '.txt')
console.log(filename)

const extention = path.extname('my.super.img-fg.png')
console.log(extention)

