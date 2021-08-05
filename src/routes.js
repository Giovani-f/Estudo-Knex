const express = require('express')

const routes = express.Router()
const UserController = require('./controllers/UserController')
const ProjectController = require('./controllers/ProjectController')

routes.get('/users', UserController.getAll)
routes.get('/users/:id', UserController.findOne)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/projects', ProjectController.getAll)
routes.post('/projects', ProjectController.create)

module.exports = routes