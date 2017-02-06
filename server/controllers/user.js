const router = require('express').Router()
const auth = require('../middlewares/auth')
const User = require('../models/user')
const Candidate = require('../models/candidate.js')
const _ = require('lodash')
const interviewRoute = require('./interview.js')

router.post('/login', (req, res) =>{
  let query = _.pick(req.body, ['email', 'password'])
  console.log(query)
  User.find(query, (err, users) =>{
    if (users && users.length == 1) {
      req.session.user = users[0]
      res.json({success: true, message: 'Login Success', user:users[0]})
    } else {
      res.json({success: false, message:'Login Failed', err})
    }
  })
})

router.use(auth)
router.get('/info', (req, res) =>{
  res.send(req.session.user)
})

router.get('/candidates', (req, res) =>{
  user = req.session.user
  Candidate.find({interviewer: user._id}, (err, candidates) =>{
    if (err) throw err
    res.json({success: true, message: 'Query Complete', candidates: candidates})
  })
})

router.post('/candidates/new', (req, res) =>{
  let newCandidate = _.pick(req.body, ['email', 'name'])
  newCandidate.interviewer = req.session.user._id
  Candidate.findOne({email: req.body.email, interviewer: req.session.user._id}, (err, candidate) =>{
    if (err) throw err
    if (candidate) {
      res.json({success: false, message: 'Create failed, candidate already exist!'})
    } else {
      Candidate.create(newCandidate, (err) =>{
        if (err) throw err
        res.json({success: true, message: 'Create success!'})
      })
    }
  })
})

router.post('/candidates/:id', (req, res) =>{
  let newCandidate = _.pick(req.body, ['name', 'status'])
  console.log(req.params.id + ", " + JSON.stringify(newCandidate));
  Candidate.findByIdAndUpdate(req.params.id, {$set: newCandidate}, (err, candidate) =>{
    if (err) throw err
    res.json({success: true, message: 'Update success!'})
  })
})

router.use(interviewRoute)

module.exports = router
