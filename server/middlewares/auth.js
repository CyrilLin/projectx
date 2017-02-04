module.exports = function(req, res, next){
  if(req.session && req.session.user){
    next()
  }else{
    res.json({status:false, message:'please login', session:req.session.id})
  }
}
