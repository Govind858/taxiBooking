const express = require('express')
const router = express.Router()
const {createTrip} = require('../Controller/tripController')

router.route('/createTrip').post(createTrip)