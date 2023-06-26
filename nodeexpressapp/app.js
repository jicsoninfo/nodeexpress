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