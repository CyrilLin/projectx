const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    userId:String,
    password:String,
    email:String
});

module.exports = mongoose.model('User', userSchema);
