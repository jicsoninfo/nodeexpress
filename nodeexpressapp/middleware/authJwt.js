

myLogger = function (req, res, next) {
    //console.log(req)
      if(req.params.userID == 8){
        next();
      }else{
        //console.log('you enter wrong userID');
        res.send('You have entered a worng user id');
      }
    //next()
  };

  myLoggerTwo = function (req, res, next) {
    console.log('myLoggertwo Group Middelware .....')
    next()
  };

  myLoggerThree = function (req, res, next) {
    console.log('myLoggerThree Group Middelware .....')
    next()
  };

  const authJwt = {
    myLogger: myLogger,
    myLoggerTwo: myLoggerTwo,
    myLoggerThree: myLoggerThree,
    
};
module.exports = authJwt;