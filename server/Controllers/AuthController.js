const User = require('../Models/user')
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv =require('dotenv')
const local_storage =require('local-storage')
const nodelailer =require('nodemailer')


// method : post
// route : api/auth/login
// acces : Public
const login =  (req,res) => {   
     
}




 // method : post
// route : api/auth/Register
// acces : Public
const register =  (req,res) => {



}





// method : post
// route : api/auth/ForgetPassword
// acces : Public
const forgetPassword =  (req,res) => {
   
}



// method : post
// route : api/auth/resetpassword/:token
// acces : Public
const resetPassword =  (req,res) => {
    res.json(' reset Password function of')
}

// method  : get
// url     : api/auth/logout
// acces   : Public
const Logout = async(req,res)=>{
    // res.clearCookie('token');
    localStorage.clear();
    res.send('Logout');

}

module.exports = {
    login,
    register,
    forgetPassword,
    resetPassword,
    Logout
}