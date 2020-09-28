const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Townhall = require('../models/Townhall')
const Power = require('../models/Power')
const joi = require('joi');
const {
    Schema
} = mongoose;

//create Schema
const userSchema = new Schema({
    username: String,
    email: String,
    password:String,

    townhalls: [{
        type: Schema.Types.ObjectId,
        ref: 'Townhall'
    }],
    powers: [{
        type: Schema.Types.ObjectId,
        ref: 'Power'
    }]

});

userSchema.pre('save', function (next) {
    User.findOnde({email: this.email})
    .than((user) => {
        if(user) next({name: 'This email already exist'});
        else{
            const salt =  bcrypt.genSalt(3)
            const hash =  bcrypt.hash(this.password, salt)
            this.password = hash
        }
    })

   .catch((err)=> next({name: 'Error'}))
})
//create module
const User = mongoose.model('User', userSchema);
//exports some module
module.exports = User;