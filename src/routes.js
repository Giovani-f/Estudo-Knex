const express = require('express')

const routes = express.Router()
const UserControler = require('./controllers/UserController')

routes.get('/users', UserControler.index)
routes.post('/users', UserControler.create)
routes.put('/users/:id', UserControler.update)
routes.delete('/users/:id', UserControler.delete)

module.exports = routes