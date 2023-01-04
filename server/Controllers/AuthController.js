const User = require("../Models/user");
const bcrypt = require("bcryptjs");
const tokenGenerator = require("jsonwebtoken");
const dotenv = require("dotenv");
const local_storage = require("local-storage");
const nodelailer = require("nodemailer");

// method : post
// route : api/auth/login
// acces : Public
const login = async (req, res, next) => {
  let { email, password } = req.body;
  let error;

  try {
    if (!email || !password) {
      error = new Error("Invalid email or password");
      error.status = 400;
      throw error;
    }

    const user = await User.findOne({ email: email });

    // validate the user
    if (!user || !(await bcrypt.compare(password, user.password))) {
      error = new Error("Invalid email or password");
      error.status = 400;
      throw error;
    }

    // generate jwt token
    const token = tokenGenerator.sign({ user }, process.env.SECRET, {
      expiresIn: "120m",
    });
    // set token in local storage
    local_storage("token", token);

   res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }

  // if (!req.body.email || !req.body.password) {
  //   res.status(400).send(" please enter email or name or password ");
  // }
  // const { body } = req;
  // User.findOne({ email: body.email }).then((e) => {
  //   const user = e;
  //   if (e) {
  //     bcrypt
  //       .compare(body.password, e.password)
  //       .then((e) => {
  //         if (e) {

  //             const token = jwt.sign({ user }, process.env.SECRET, {
  //               expiresIn: "120m",
  //             });
  //             local_storage("token", token);
  //             // res.status(200).json({ token: local_storage("token") });
  //             res.status(200).json({
  //               success: true,
  //               user,
  //             });

  //         } else {
  //           res.status(401).send("passsord invalid // unauthorized");
  //         }
  //       })
  //       .catch(() => {
  //         res.send("not hashed");
  //       });
  //   } else {
  //     res.status(404).send("user not found");
  //   }
  // });
};

// method : post
// route : api/auth/Register
// acces : Public
const register = (req, res) => {
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
              res
                .status(400)
                .send(
                  "not created // something woring // error in length of name"
                );
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
