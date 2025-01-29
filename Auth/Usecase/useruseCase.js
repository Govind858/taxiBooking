const {createUser,findUser} = require("../Repo/authRepo");
const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

 
module.exports.passwordHashing =async (data) =>{
    let {password} = data
    let saltRound = 10
    const hashed = await bcrypt.hash(password,saltRound)
    data.password = hashed
    //console.log(data)
    await createUser(data);
    return data;
}
 
module.exports.loginFunction = async (data) => {
    let user = await findUser(data)
    console.log(user,"user data")
    let {password} = data;
    console.log(data)
    const isMatch = await bcrypt.compare(password,user[0].password)
    if(!isMatch){   
        throw new Error('invalid password');
    }
    const token = jwt.sign({id: user._id}, "this_is_secretKey", {expiresIn: '1h'})
    let {name} = user[0]
    let {mobile} = user[0]
    let userData = {
        name,
        mobile,
        token
    }
    console.log(token)
    return(userData)
}

