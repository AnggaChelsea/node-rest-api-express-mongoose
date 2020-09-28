const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController')


userRouter.post('/register', (req,res, next) => {
    userController.userRegister
});

userRouter.post('/login', (req,res, next) => {
    userController.userLogin
});

// userController.patch('/:id', (req,res)=>{
//     userController.userRegister
// });

// userRouter.patch("/:id", (req, res) => {
//   const {
//     TownhallID
//   } = req.body;
//   const {
//     PowerID
//   } = req.body;
//   User.findByIdAndUpdate(
//       req.params.usersID, {
//         $push: {
//           townhalls: TownhallID,
//           powers: PowerID
//         },
//       }, {
//         new: true,
//       }
//     )
//     .then((result) => {
//       res.status(200).send({
//         message: "suuccess",
//         data: result,
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "filed to push",
//         details: err,
//       });
//     });
// });

module.exports = userRouter;