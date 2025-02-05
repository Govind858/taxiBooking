const AcceptRideModel = require("../Model/acceptRideModel")

module.exports.addtoDb = async (data) => {
            try {
                return await AcceptRideModel.create(data)
            } catch (error) {
                console.log(error)
            }
    }
    module.exports.updateStatus = async (data) => {
        try {
            console.log(data,"------------");
            let updatedData = await AcceptRideModel.updateOne({ _id: data.userId },{ $set: { TripStatus: data.status } }
            );
            return updatedData;
        } catch (error) {
            console.log(error);
        }
    };
    
    module.exports.updatedStatusfn = async (data) => {
        try {
            let dataUpdated = await AcceptRideModel.updateOne(
                { _id: data.id }, 
                { $set: { paymentStatus: "paid", paymentMode: data.paymentMode } }
            );
            return dataUpdated; // Returning the update result
        } catch (error) {
            console.error(error);
            throw error; // Throwing the error so it can be handled where this function is called
        }
    };
    