import {app} from './app'
import * as request from 'supertest'

const service = request(app)

test('test /health', async () => {
  const res = await service.get('/health')
  expect(res.status).toEqual(200)
  expect(res.body).toEqual({health: 'ok'})
})
