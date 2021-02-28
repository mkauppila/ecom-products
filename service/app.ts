import express = require('express')

export const app = express()
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({health: 'ok'}).end()
})
