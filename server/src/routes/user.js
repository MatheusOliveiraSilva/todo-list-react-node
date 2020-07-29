const express = require('express')

const controller = require('./../user/user.controller')
const admin = require('./../../middlewares/admin')
const auth = require('./../../middlewares/auth')

const router = express.Router()

router.get('/', [auth, admin], controller.getAll)
router.get('/:id', auth, controller.getById)
router.get('/me', auth, controller.getCurrent)
router.post('/register', controller.register)
router.post('/authenticate', controller.authenticate)
router.put('/:id', auth, controller.update)
router.delete('/:id', [auth, admin], controller._delete)

module.exports = router
