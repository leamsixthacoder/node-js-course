const http = require('node:http') // protocol HTTP
const { findAvailablePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3000
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('KLK MANITO TAMO METIENDO MANO EN NODE JS')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})
