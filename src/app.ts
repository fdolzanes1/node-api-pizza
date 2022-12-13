import express from 'express'
import router from './routers/index'
import path from 'path'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

router(app)

app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})
