const express = require('express');
const app = express();
const router = express.Router();
 
router.get('/home', (req, res) => {
  res.send('Hello World, This is home router');
});
 
router.get('/profile', (req, res) => {
  res.send('Hello World, This is profile router');
});
 
router.get('/login', (req, res) => {
  res.send('Hello World, This is login router');
});
 
router.get('/logout', (req, res) => {
  res.send('Hello World, This is logout router');
});
 
app.use('/', router);
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});


//This route path will match requests to /random.text.

app.get('/random.text', (req, res) => {
  res.send('random.text')
})
// Here are some examples of route paths based on string patterns.

// This route path will match acd and abcd.

app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})
//This route path will match abcd, abbcd, abbbcd, and so on.

app.get('/ab+cd', (req, res) => {
  res.send('ab+cd')
})
//This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.

app.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})
//This route path will match /abe and /abcde.

app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e')
})
//Examples of route paths based on regular expressions:

//This route path will match anything with an “a” in it.

app.get(/a/, (req, res) => {
  res.send('/a/')
})
//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.

app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/')
})


//Route parameters
//Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
// To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

// app.get('/users/:userId/books/:bookId', (req, res) => {
//   res.send(req.params)
// })
// The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).

// Since the hyphen (-) and the dot (.) are interpreted literally, they can be used along with route parameters for useful purposes.

// Route path: /flights/:from-:to
// Request URL: http://localhost:3000/flights/LAX-SFO
// req.params: { "from": "LAX", "to": "SFO" }
// Route path: /plantae/:genus.:species
// Request URL: http://localhost:3000/plantae/Prunus.persica
// req.params: { "genus": "Prunus", "species": "persica" }
// To have more control over the exact string that can be matched by a route parameter, you can append a regular expression in parentheses (()):

// Route path: /user/:userId(\d+)
// Request URL: http://localhost:3000/user/42
// req.params: {"userId": "42"}
// Because the regular expression is usually part of a literal string, be sure to escape any \ characters with an additional backslash, for example \\d+.

// In Express 4.x, the * character in regular expressions is not interpreted in the usual way. As a workaround, use {0,} instead of *. This will likely be fixed in Express 5.