import {app} from './app'

const port = 3000
app.listen(port, async () => {
  console.log('Service running on port ', port)
})
