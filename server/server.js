require("dotenv").config();
require("./Config/config");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

//router
const routerAuth = require("./Routes/authRoute");
const routerClient = require("./Routes/clientRoute");
const routerAppartemet = require("./Routes/appartemetRoute");
const routerPaiement = require("./Routes/paiementRoute");

// //Middleware
const { routeErrorHandler } = require("./Middlewares/routeErrorHandler");
const errorhandler = require("./Middlewares/errorHandler");

//router
app.use("/api/auth", routerAuth);
app.use("/api/client", routerClient);
app.use("/api/appartement", routerAppartemet);
app.use("/api/paiement", routerPaiement);

// //Middleware
app.use(routeErrorHandler);
app.use(errorhandler);

const port = process.env.PORT || 8081;
app.listen(port, (err) => {
  if (!err) {
    console.log(`the port ${port} is running`);
  } else {
    console.log(err);
  }
});

module.exports = app;
