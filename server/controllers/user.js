const router = require('express').Router();
const auth = require('../middlewares/auth');
const User = require('../models/user');

router.post('/login', (req, res) =>{
  let query = {userId:req.body.userName, password: req.body.password};

  User.find(query, (err, users) =>{
    if (users && users.count == 1) {
      req.session.user = users[0];
      res.json({message:'Login Success', user:users[0]});
    } else {
      res.json({message:'Login Failed'});
    }
  });
});

router.use(auth);
router.get('/info', (req, res) =>{
  res.send(req.session.user)
});

module.exports = router;
