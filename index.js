//RESTAPI process

//import server, body-parser
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const routes = require('./routes/router');
const auth_routes = require('./routes/auth_route')

// Instantiate server
const server = express();



// create middleware
server.use(bodyParser.json());

//routes
server.use(auth_routes);
server.use(routes);

mongoose.connect('mongodb+srv://StudentDB:C8ykEE7uS27lWEsi@cluster0.cpscziy.mongodb.net/StudentsDB?retryWrites=true&w=majority')
.then(
  result => server.listen(5000, () => console.log("server has started")) 
)
.catch( err => console.log(err))










































// const http = require('http');

// const handleAllRequests = (req, res) => {
//     const url = req.url;
//     res.setHeader('content-type', 'text/html')
//     if (url == '/') {
//         res.write('<h1>Welcome home, your journey begins here</h1>')
//     } else if (url == '/about') {
//         res.write('<h3>About Us</h3>')
//     } else {
//         res.write('<h1>404 not found</h1>')
//     }
//     res.end()
// }

// const server = http.createServer(handleAllRequests);

// server.listen(5000, () => console.log('Server request sent'));

// const express = require('express');

// const handleSignUpRequests = (req, res) => {
//     res.send('<h1>Welcome to signup page</h1>')
// }
// const handleLoginRequests = (req, res) => {
//     res.send('<h1>Welcome to login page</h1>')
// }
// const handleProfileRequests = (req, res) => {
//     res.send('<h1>Welcome to Profile page </h1>')
// }
// const handleHomeRequests = (req, res) => {
//     res.send('<h1>Welcome Home</h1>')
// }

// const middleware = (req, res, next) => {
//     console.log('Validation successful')

//     next()
// }

// const server = express();

// server.use('/signup', handleSignUpRequests);
// server.use('/login',  middleware, handleLoginRequests);
// server.use('/profile', handleProfileRequests);
// server.use('/', handleHomeRequests);
// server.listen(5000, () => console.log('Server has started'))