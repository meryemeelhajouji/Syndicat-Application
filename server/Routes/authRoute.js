
const express = require('express')
const router = express.Router()

const {login,register,forgetPassword,resetPassword,Logout} = require('../Controllers/authController')

router.post('/login',login)
router.post('/register',register)
router.get('/logout',Logout)
router.post('/forgetpassword',forgetPassword)
router.post('/resetpassword/:token',resetPassword)

module.exports = router