const mongoose = require('mongoose');

const ip = new mongoose.Schema({
    ip: {
        type: String
    },
    date: {
        type: Date
    }
})

module.exports = new mongoose.model('ip', ip);