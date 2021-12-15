const express = require('express');
const route = express.Router();
const authentication = require('./authentication');
const userRoute = require('./userRoute');

route.get('/', (request, response) => response.send('root'));

// route authentication => signup, login
route.use('/authentication', authentication);

route.use('/user', userRoute)

module.exports = route;