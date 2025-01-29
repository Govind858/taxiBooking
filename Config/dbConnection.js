const mongoose = require('mongoose')

dbConnection = () => {
    try {
        mongoose.connect('mongodb+srv://user:123@cluster0.sz7m0.mongodb.net/taxiBooking?retryWrites=true&w=majority&appName=Cluster0')
    } catch (error) {
        
    }
}
module.exports = dbConnection;      