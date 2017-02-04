const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
    userId:String,
    password:String,
    email:String,
    candidates: [{type: Schema.Types.ObjectId, ref: 'Candidate'}]
})

module.exports = mongoose.model('User', userSchema)
