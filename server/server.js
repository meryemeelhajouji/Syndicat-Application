require('dotenv').config()
const mongoos = require('./Config/config')
const express = require('express')
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json())

//router
const routerAuth = require('./Routes/authRoute')


// //Middleware
// const {errorHandler}= require('./Middlewares/errorMiddleware')
// const {routeErrorHandler}= require('./Middlewares/routerMiddlware')

//router
app.use('/api/auth',routerAuth)



// //Middleware
// app.use(errorHandler)
// app.use(routeErrorHandler)




const port = process.env.PORT || 8081
app.listen(port, (err)=> {
    if(!err){
    console.log(`the port ${port} is running`)
    }else{
        console.log(err)
    }
})