const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thucnguyen1907:thucnguyen1907@cluster0.k8cgd.mongodb.net/quanlyphongtro');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const hiddenString = process.env.TOKEN_SEC_KEY;
const userSchema = new mongoose.Schema({
    fullname: 'String',
    email: 'String',
    password: 'String',
    tokens: [{
        token: {
            type: String,
            require: true,
        }
    }]
});

const User = mongoose.model('User', userSchema);
module.exports = User;