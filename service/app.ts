import * as express from 'express'
import {router} from './products/products'

export const app = express()
app.use(express.json())

app.get('/health', (_req: express.Request, res: express.Response) => {
  res.json({health: 'ok'}).end()
})

app.use('/products', router)
