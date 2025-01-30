
const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    mobile:{
        type:String,
        required:true
    },

    email:{
        type:String,
        require:true
    },

    password:{
        type:String,
        required:true
    },

    availableStatus:{
        type:String,
        default:"free"
    }
})

const driverModel = mongoose.model('drivers',driverSchema)
module.exports = driverModel