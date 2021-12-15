const { join } = require('path');
const users = require('../models/users.json');
const { writeFile } = require('fs');


const signPage = (request, response) => {
  response.render(join(__dirname, '../views/signupPage.ejs'));
};

const signup = (request, response) => {
  const { username, password, email, gender } = request.body;
  

  if (users.find(user => user.username === username)) return response.status(400).send('unique-user');

  users.push({ username, password, email, gender , isLoggedIn:false });
  

  writeFile(join(__dirname, '../models/users.json'), JSON.stringify(users), (err) => {
    if (err) return console.log(`Error (write users json): ${err.message}`);

    response.send("created user");
  });

};

const loginPage = (request, response) => {
  response.render(join(__dirname, '../views/loginPage.ejs'));
};

const login = (request, response) => {
  const { username, password } = request.body;

  const targetUser = users.find(user => user.username === username);

  if (!targetUser) return response.status(404).send('notFound-user');

  if (targetUser.password !== password) return response.status(400).send('notMatch-user');

  // go...
  response.send('logging success');
};

module.exports = { signPage, signup, loginPage, login };