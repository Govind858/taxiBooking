const express = require('express')
const router = express.Router()
const {createTrip,searchNow, acceptRide} = require('../Controller/tripController')
const {verifyToken} = require('../../Middleware/UserMiddleware')
router.route('/createTrip').post(verifyToken,createTrip)
router.route('/SearchNow').post(verifyToken,searchNow)
router.route('/acceptRide').post(acceptRide)

module.exports = router