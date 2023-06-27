// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const express = require('express');
const app = express();
const router = express.Router();


var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //this require npm install ejs

// const myLogger = function (req, res, next) {
//     console.log('Global Middelware')
//     next()
//   }
  
// app.use(myLogger);

//   app.get('/', (req, res) => {
//     res.send('Hello World!')
//   });

//router.use(myLogger);
// router.get('/', (req, res) => {
//     res.send('Hello World!')
//   });

app.use('/', router);

// router.get('/home', (req, res) => {
//     res.send('Hello world, This is home router');
// });

// router.get('/profile', (req, res)=>{
//     res.send('This is profile router');
// });

// router.get('/login', (req, res) =>{
//     res.send('This is login router');
// });

// router.get('/logout', (req, res) => {
//     res.send('This is logout router');
// });

//require('./routes/login')(router);
require('./routes/index')(router);


app.listen(process.env.PORT || 3000, () =>{
    console.log('Web Server is listening at port ' +(process.env.PORT || 3000));
});



// for run this app command -- node nodeexpressapp/app.js