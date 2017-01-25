const router = require('express').Router();
const auth = require('../middlewares/auth');
const User = require('../models/user');

router.post('/login', (req, res) =>{
  let query = {email:req.body.email, password: req.body.password};
  console.log(query);
  User.find(query, (err, users) =>{
    if (users && users.length == 1) {
      req.session.user = users[0];
      res.json({success: true, message: 'Login Success', user:users[0]});
    } else {
      res.json({success: false, message:'Login Failed', err});
    }
  });
});

router.use(auth);
router.get('/info', (req, res) =>{
  res.send(req.session.user)
});

module.exports = router;
