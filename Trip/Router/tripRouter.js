const express = require('express')
const router = express.Router()
const {createTrip,searchNow, acceptRide, updateTripStatus,upadtePaymentStatus} = require('../Controller/tripController')
const {verifyToken} = require('../../Middleware/UserMiddleware')
router.route('/createTrip').post(verifyToken,createTrip)
router.route('/SearchNow').post(verifyToken,searchNow)
router.route('/acceptRide').post(verifyToken,acceptRide)
router.route('/updateTripStatus').post(verifyToken,updateTripStatus)
router.route('/upadtePaymentStatus').post(verifyToken,upadtePaymentStatus)
module.exports = router