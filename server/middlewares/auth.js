module.exports = function(req, res, next){
  console.log(req.session);
  if(req.session && req.session.user){
    next();
  }else{
    res.json({status:false, message:'please login', session:req.session.id});
  }
}
