module.exports = {
  handler404 : function(req, res, next){
    let err = new Error(`"${req.url}" is Not Found!`);
    err.status = 404;
    console.log('handler 404 error!');
    next(err);
  },

  handlerError : function(err, req, res, next){
    // set locals, only providing error in development
    console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json(err);
  }
}
