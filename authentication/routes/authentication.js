const express = require('express');
const route = express.Router();
const { signPage, signup, loginPage, login } = require('../controllers/authentication');

//  render signup page
route.get('/signup', signPage);

route.post('/signup', signup);


route.get('/login', loginPage);

route.post('/login', login);




module.exports = route;