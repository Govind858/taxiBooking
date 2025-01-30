const express = require('express')
const router = express.Router()
const {createTrip,searchNow} = require('../Controller/tripController')

router.route('/createTrip').post(createTrip)
router.route('/SearchNow').post(searchNow)

module.exports = router