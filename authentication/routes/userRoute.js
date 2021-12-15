const express = require('express');
const route = express.Router();
const { join } = require('path');

// user dashboard
route.get('/', (request, response) => {
  // go to...
  response.render(join(__dirname, '../views/userPage.ejs'), {
    username: null
  });
});



module.exports = route;