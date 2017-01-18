let router = require('express').Router();

router.get('/', (req, res) =>{
  res.send({message:"hello world"})
});

module.exports = router;
