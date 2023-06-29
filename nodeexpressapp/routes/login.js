const {customercontroller} = require('../controllers')
// module.exports = function(router){
//     router.get('/login', (req, res) =>{
//         res.send('This is login router');
//     });
// }

const {authJwt} = require('../middleware');
//const viewIndex = require('../views/index.html');
module.exports = function(router){

    // router.use(function (req, res, next){
    //     res.header(
    //         "Access-Controller-Allow-Headers",
    //         "x-access-token, Origin, Content-type, Accept"
    //     );
    //     next();
    // });
    
    router.get('/login', (req, res) =>{
        res.send('This is login router through index.......');
    });


    router.get('/logintwo', (req, res) =>{
        res.send('.......This is login router two through index.......');
    });

    router.get('/loginThree', [
        authJwt.myLoggerThree,
        authJwt.myLoggerTwo,
    ],(req, res) =>{
        //res.send('.......This is login three router two through middelware.......');
        res.render('index');
    });


    // router.get('/loginFour/:userID', [
    //     authJwt.myLogger,
       
    // ],(req, res) =>{
    //     //res.send('.......This is login Four router through middelware.......');
    //     //res.send(req.params);
    //     //return res.redirect('/profile');
    //     res.render('index');
    // });

    router.get('/loginFour/:userID', [
        authJwt.myLogger,
       
    ], //(req, res) =>{
        customercontroller.customerindex
   // }

    );
    

}
