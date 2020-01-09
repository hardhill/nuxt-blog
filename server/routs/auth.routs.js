const { Router } = require('express')
const router = Router()
const { login, createUser } = require('../controllers/auth.controllers')

//../api/auth/admin/login
router.post('/admin/login', login)

//../api/auth/admin/create
router.post('/admin/login', createUser)

module.exports = router