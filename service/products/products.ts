import * as express from 'express'

export const router = express.Router()

// Get product by the id
router.get('/:id', (req: express.Request, res: express.Response) => {
  const id = String(req.params.id)

  res.status(200).json({id})
})
