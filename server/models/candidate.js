const mongoose = require('mongoose')
const Schema = mongoose.Schema

const candidateSchema = mongoose.Schema({
    email: String,
    name: String,
    status: {type: Number, default: 0}, //0, uninterview, 1, interviewing, 2, interviewed 3, approved, -1, rejected
    interviewer: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Candidate', candidateSchema)
