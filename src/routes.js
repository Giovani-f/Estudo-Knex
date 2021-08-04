const express = require('express')

const routes = express.Router()
const UserControler = require('./controllers/UserController')

routes.get('/users', UserControler.index)

module.exports = routes