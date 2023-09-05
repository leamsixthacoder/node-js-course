const express = require('express')
const app = express()

const PORT = process.env.PORT ?? 3000

app.get('/', (req, res) => {
  res.json({ message: 'Inicio' })
})

app.post('/pokemon', (req, res) => {
  let body = ''

  // listen the data event
  req.on('data', chunk => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    data.tiemstamp = Date.now()
    res.status(201).json(data)
  })
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
