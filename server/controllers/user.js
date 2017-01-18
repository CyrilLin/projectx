let router = require('express').Router();

router.post('/login', (req, res) =>{
  if (req.body.userName === 'linhan' && req.body.password === '1988104') {
    res.send({message:'Login Success', token:'asdasdl1212asdaq123'});
  } else {
    res.send({message:'Login Failed'});
  }
});

module.exports = router;
