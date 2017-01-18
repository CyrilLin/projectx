let userRouter = require('./user')

let router = require('express').Router();

router.use('/user', userRouter);

router.get('/', (req, res) =>{
  res.send({message:"hello world, Cyril"})
});

module.exports = router;
