const express = require('express');
const bcrypt = require('bcrypt');
const authRouter = express.Router();

const User = require('../models/User');
const authController = require('../controllers/authController');

authRouter.post('/', (req, res, next) => {
    authController.login
})

authRouter.post('/', (req, res, next)=>{
    authController.register
})

module.exports = authRouter;