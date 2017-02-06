const mongoose = require('mongoose')
const Schema = mongoose.Schema
const codingTaskSchema = require('./taskSchema.js')

const interviewPhaseSchema = mongoose.Schema({
  isLiveInterview: {type: Boolean, default: false},
  interviewer: {type: Schema.Types.ObjectId, ref: 'User'},
  comments: String,
  rank: {type: Number, default: 3},  //0, 1, 2, 3, 4, 5 for interview rank, higher is better
  codingTasks: [codingTaskSchema],
  status: {type: Number, default: 0}  //0: unstart, 1: inprogress, 2: completed
})

const interviewSchema = mongoose.Schema({
  candidate: {type: Schema.Types.ObjectId, ref: 'Candidate'},
  phases: [interviewPhaseSchema],
  summaryComments: String,
  status: {type: Number, default: 0}  //0: unstart, 1: inprogress, 2: underreview, 3: approved, 4: rejected
})

const InterviewModel = mongoose.model('Interview', interviewSchema)
//
// interviewSchema.statics.findUserRelated = function(userId, cb) {
//   this.find({''})
// }

module.exports = InterviewModel
