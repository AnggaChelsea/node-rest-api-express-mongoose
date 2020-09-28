// const auth = require('../models/Login');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class authController {
  static login(req, res, next) {
    const {
      email,
      password
    } = req.params;
    User.findOne({
        email: email
      })
      .then((users) => {
        if (users) {
          bcrypt.compare(password, result.password, (err, isMatch) => {
            jwt.sign({
              _userId: _userId
            }, 'ASSIGMENT2', (err, token) => {
              res.status(200).json({
                success: true,
                users
              });
            });
          })
        } else {
          next();
        }
      })
    if (password === result.password) {
      res.status(200).send({
        success: true,
        data: User
      })
    } else {
      res.status(500).send({
        success: false,
        data: true
      })
    }
  }

  static register(req, res, next) {
    const {
      username,
      email,
      password
    } = req.body;
    User.create({
        username: username,
        email: email,
        password: password
      })

      .then((result) => {
        res.status(201).json({
          success: true,
          data: {
            _id: user._id,
            email: user.email
          }
        });
      })
      .catch(next);
  }
  // User.findOne({
  //     email: email
  // })
  // .then((result) => {
  //     if ((result) => {
  //             bcrypt.compare(password, result.password, (err, isMatch) => {
  //                 if (isMatch) {
  //                     console.log('login succes')
  //                 } else {
  //                     console.log('login failed')
  //                 }
  //             })
  //         })
  //         if (password === result.password) {
  //             res.status(200).json({
  //                 message: 'login successful'
  //             })
  //         } else {
  //             res.status(401).json({
  //                 message: 'failed login'
  //             })
  //         }
  // })
  // .catch((err) => {
  //     res.status(500).send({
  //         message: err
  //     })
  // })
}