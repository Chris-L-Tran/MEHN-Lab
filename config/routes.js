var express = require('express')
var router = express.Router()
var usersController = require('../controllers/users')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var passport = require('passport')

router.route('/')
  .get(usersController.home)

router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route('/logout')
  .get(usersController.getLogout)

router.route('/secret')
   .get(authenticatedUser, usersController.secret)

module.exports = router
