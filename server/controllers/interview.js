const router = require('express').Router()
const Interview = require('../models/interview.js')
const _ = require('lodash')

router.get('/interviews', (req, res) =>{
  Interview.find({'phases.interviewer': req.session.user._id}, (err, interviews) =>{
    if (err) throw err
    res.json({success: true, message: 'Query completed', interviews: interviews})
  })
})

router.post('/interview/new', (req, res) =>{
  Interview.create(req.body).then((interview) =>{
    res.json({success: true, message: 'Create success'})
  })
})

module.exports = router
