require("dotenv").config();
require("./Config/config");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

//router
const routerAuth = require("./Routes/authRoute");
const routerClient = require("./Routes/clientRoute");


// //Middleware
// const {errorHandler}= require('./Middlewares/errorMiddleware')
const {routeErrorHandler}= require('./Middlewares/routeErrorHandler')

//router
app.use("/api/auth", routerAuth);
app.use("/api/client", routerClient);


// //Middleware
// app.use(errorHandler)
app.use(routeErrorHandler)

const port = process.env.PORT || 8081;
app.listen(port, (err) => {
  if (!err) {
    console.log(`the port ${port} is running`);
  } else {
    console.log(err);
  }
});

module.exports = app;
