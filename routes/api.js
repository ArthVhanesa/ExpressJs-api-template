const express = require('express')
const router = express.Router()
const { getAPI } = require('../controllers/api')

router.route('/').get(getAPI)

module.exports =  router ;