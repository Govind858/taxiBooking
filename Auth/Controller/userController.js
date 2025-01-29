const express = require('express')
const asyncHandler = require('express-async-handler');

const {passwordHashing, loginFunction} = require("../Usecase/useruseCase")
const {fetchallUsers,deleteAll} = require('../Repo/authRepo')

const userRegistration = async (req,res) =>{
    console.log(req.body,"arrived")
    let data = req.body;
    const result = await passwordHashing(data);
    console.log(result,"data in controller")
    res.json({
        success:'true',
        message:'user registration successfull',
        result: data

    })
    
}

const userLogin = async (req,res) => {
        const data = req.body
         console.log(req.body, "controller")
        const user = await loginFunction(data)
        console.log(user,"token")    
        res.json({
            succes:true,
            message:'login data',
            result:user
        })
}

const viewallUsers = async (req,res) => {
    let allUsers = await fetchallUsers()
    console.log(allUsers)
    res.json({
        success:true,
        message:"succesfully listed all users",
        allUsers
    })
}

const deleteallUsers = async (req,res) => {
    await deleteAll()
    res.json({
        succes:true,
        message:"deleted all users data",
    })
}


module.exports = {userRegistration,userLogin,viewallUsers,deleteallUsers}


