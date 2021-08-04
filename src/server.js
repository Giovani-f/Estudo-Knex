const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

//not found
app.use((req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

//catch all
app.use((err, req, res, next) => {
  res.status(err.send || 500)
  res.json({ error: err.message })
})

app.listen(3000, () => {console.log('Server is running in port 3000...')})