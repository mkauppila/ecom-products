import * as express from 'express'

export const app = express()
app.use(express.json())

app.get('/health', (_req: express.Request, res: express.Response) => {
  res.json({health: 'ok'}).end()
})
