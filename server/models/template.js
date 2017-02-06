const mongoose = require('mongoose');
const Schema = mongoose.Schema
const taskSchema = require('./taskSchema.js')

const templateSchema = mongoose.Schema({
  name: String,
  desc: String,
  language: String,
  codingTasks:[taskSchema],
  isPublic: {type: Boolean, default: true},
  creator: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Template', templateSchema)
