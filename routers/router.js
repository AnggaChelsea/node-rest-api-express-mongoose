const express = require("express");
const routeapp = express.Router();
const authentication = require('../middlewares/auth')
const userRouter = require('./userRoute')
const powerRouter = require('./powerRoute')
const authRouter = require('./authRouter')

// const ErrorHandler = require('../middlewares/errorHandler');
const { route } = require("./userRoute");

//ngambil dari UserRoute
routeapp.use('/user', userRouter);
routeapp.use('/power', powerRouter);
routeapp.use('/login', authRouter)
// routeapp.use(ErrorHandler)
routeapp.use(authentication);
  

module.exports = routeapp;