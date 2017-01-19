let router = require('express').Router();
let auth = require('../middlewares/auth');

router.post('/login', (req, res) =>{
  if (req.body.userName !== '' && req.body.password !== '') {
    req.session.user = req.body
    console.log(req.session);
    res.json({message:'Login Success', token:req.body.userName + 'token19881023123'});
  } else {
    res.json({message:'Login Failed'});
  }
});


router.get('/login', (req, res) =>{
  if(req.query.userName !== '' && req.query.password !== ''){
    req.session.user = {userName:req.query.userName, password:req.query.password};
    console.log(req.session);
    res.json({message:'Login Success', token:req.session.id});
  } else {
    res.json({message:'Login Failed'});
  }
});

router.use(auth);
router.get('/info', (req, res) =>{
  res.send(req.session.user)
});

module.exports = router;
