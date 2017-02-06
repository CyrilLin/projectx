const router = require('express').Router()
const Interview = require('../models/interview.js')
const Template = require('../models/template.js')
const _ = require('lodash')

router.get('/interviews', (req, res) =>{
  Interview.find({'phases.interviewer': req.session.user._id}, (err, interviews) =>{
    if (err) throw err
    res.json({success: true, message: 'Query completed', interviews: interviews})
  })
})

router.post('/interview/new', (req, res) =>{
  if (req.body.hasOwnProperty('template')){
    Template.findById(req.body.template).exec()
      .then((template) =>{
        let interview = new Interview(req.body)
        interview.newPhase({title: 'Coding Test', isLiveInterview: false, interviewer: req.session.user}, template)
        interview.save()
        res.json({success: true, message: 'Create success'})
      }).catch((err) =>{
        res.json({success:false, message: err.message})
      })
  } else {
    Interview.create(req.body).then((interview) =>{
      res.json({success: true, message: 'Create success'})
    })
  }
})

router.post('/interview/:id/delete', (req, res) =>{
  Interview.findByIdAndRemove(req.params.id).exec().then(()=>{
    res.json({success: true, message: 'Delete interview completed'})
  }).catch((err) =>{
    res.json({success: false, message: err.message})
  })
})

router.get('/templates', (req, res) =>{
  Template.find({}, (err, templates) =>{
    res.json({success:true, message: 'Query completed', templates: templates})
  })
})

router.post('/template/new', (req, res) =>{
  Template.create(req.body, (err, tempaltes) =>{
    res.json({success:true, message:'Create completed'})
  })
})

router.post('/template/:id/delete', (req,res) =>{
  Template.findByIdAndRemove(req.params.id).exec().then(() =>{
    res.json({success: true, message:'Delete template completed'})
  }).catch((err) =>{
    res.json({success: false, message: err.message})
  })
})

module.exports = router
