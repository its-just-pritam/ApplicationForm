const mongoose = require('mongoose');

const user = new mongoose.Schema({
    FirstName:String,
    LastName:String,
    EmailID:String,
    PhoneNo:Number,
    Image:String
});

module.exports = User = mongoose.model('user',user);