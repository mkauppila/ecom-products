import * as express from 'express'

export const router = express.Router()
router.get('/:id', (req: express.Request, res: express.Response) => {
  const id = String(req.params.id)

  res.status(200).json({id})
})
