const mongoose = require('mongoose');

const users = new mongoose.Schema({
    ip: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = new mongoose.model('user', users);