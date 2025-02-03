const express = require('express')
const router = express.Router()
const {createTrip,searchNow} = require('../Controller/tripController')
const {verifyToken} = require('../../Middleware/UserMiddleware')
router.route('/createTrip').post(verifyToken,createTrip)
router.route('/SearchNow').post(verifyToken,searchNow)

module.exports = router