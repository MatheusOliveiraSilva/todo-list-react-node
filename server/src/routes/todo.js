const express = require('express')

const auth = require('./../../middlewares/auth')
const controller = require('./../todo/todo.controller')

const router = express.Router()

router.get('/', auth, controller.getAllList)
router.post('/', auth, controller.createList)
router.put('/add/:id', auth, controller.addTodo)
router.put('/remove/:id', auth, controller.removeTodo)
router.put('/rename/:id', auth, controller.renameTodo)
router.delete('/:id', auth, controller.deleteList)

module.exports = router
