const net = require('node:net')
const pc = require('picocolors')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(pc.Blue(`The port:  ${pc.bgGreen(desiredPort)} is in use at this time`))
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
