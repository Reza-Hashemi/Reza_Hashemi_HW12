const express = require('express');
const app = express();
const appRoutes = require('../routes/appRoutes');
const { join } = require('path');

// static public
app.use(express.static(join('./public')));

// ejs setup
app.set('view engine', 'ejs');
app.set('views', join(__dirname, './views'));

// body parse
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes middleware
app.use('/', appRoutes);

app.listen(2021, '127.0.0.1', () => console.log('Listening on :2021'));