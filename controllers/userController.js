const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

class UserController {
  static userRegister(req, res, next) {
    const {
      username,
      email,
      password
    } = req.body.values;
    const user = new User({
      username,
      email,
      password
    })
    user.save()
      .then((user) => {
        res.status(201).json({
          success: true,
          data: user
        });
      })
      .catch(next);
  }

  static get(req, res, next) {
    User.find()
      .populate('powers')
      .then((result) => {
        res.status(200).send({
          message: 'success',
          data: result
        })
      })
      .catch(next);
  }





  // static userLogin(req, res, next) {
  //   User.find({
  //       email,
  //       password
  //     })
  //     .then((User) => {
  //       res.status(201).send({
  //         success: true,
  //         data: User
  //       })
  //     })
  // }

}



module.exports = UserController;