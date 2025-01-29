const userModel = require("../model/authModel")


module.exports.createUser = async (data) => {
    await userModel.create(data)
    return true
    console.log(data,"repo")
}

module.exports.findUser = async (data) => {
let {mobile} = data 
   return await userModel.find({mobile:mobile})
}

module.exports.fetchallUsers = async () => {
    return await userModel.find({})
}

module.exports.deleteAll = async () => {
    return await userModel.deleteMany({})
}