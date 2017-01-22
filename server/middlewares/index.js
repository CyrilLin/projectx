module.exports = {

  handlerXSS : function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  },

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
