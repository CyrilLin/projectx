const mongoose = require('mongoose')
const Schema = mongoose.Schema

const codingTaskSchema = mongoose.Schema({
    name: String,
    language: String,
    status: {type: Number, default: 0}, //0, unstart, 1, started, 2, tested 3, submited, -1, skiped
    instruction: String,
    testCase: String,
    userCode: String,
    execCount: Number
})

module.exports = codingTaskSchema
