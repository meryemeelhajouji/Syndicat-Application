const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const local_storage = require("local-storage");
const nodelailer = require("nodemailer");

// method : post
// route : api/auth/login
// acces : Public
const login = (req, res) => {
  if (!req.body.email || !req.body.name || !req.body.password) {
    res.status(400).send(" please enter email or name or password ");
  }
  if (req.body.password != req.body.password2) {
    res.status(400).send(" password not match");
  }

  const { body } = req;
  User.findOne({ email: body.email }).then((e) => {
    if (!e) {
      const token = jwt.sign({ id: User._id }, process.env.SECRET);
      body.token = token;
      bcrypt
        .hash(body.password, 10)
        .then((hashPassword) => {
          body.password = hashPassword;
          User.create({ ...body })
            .then(() => {
              res.status(201).send("created");
            })
            .catch(() => {
              res.status(400).send("not created // something woring ");
            });
        })
        .catch(() => {
          res.send("error in hash");
        });
    } else {
      res.status(400).send("can not create // email déja existe");
    }
  });
};

// method : post
// route : api/auth/Register
// acces : Public
const register = (req, res) => {};

// method : post
// route : api/auth/ForgetPassword
// acces : Public
const forgetPassword = (req, res) => {};

// method : post
// route : api/auth/resetpassword/:token
// acces : Public
const resetPassword = (req, res) => {
  res.json(" reset Password function of");
};

// method  : get
// url     : api/auth/logout
// acces   : Public
const Logout = async (req, res) => {
  // res.clearCookie('token');
  localStorage.clear();
  res.send("Logout");
};

module.exports = {
  login,
  register,
  forgetPassword,
  resetPassword,
  Logout,
};
