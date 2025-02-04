const mongoose = require('mongoose')

const acceptRideSchema = new mongoose.Schema({
    trip:{
        type:Object,
        required:true
    },

    user:{
        type:[Object],
        required:true
    },

    driver:{
        type:Object,
        required:true
    },

    TripStatus:{
        type:String,
       default:"Not_Started"
    },

    AcceptedStatus:{
        type:String,
        default:"Accepted"
    },
    
},{timestamps:true})


const AcceptRideModel = mongoose.model('acceptRide',acceptRideSchema)

module.exports = AcceptRideModel