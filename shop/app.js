const express = require('express');
const app = express();
const { join } = require('path');
const appRoutes = require('./routes/appRoutes.js');

app.set ('view engine' , 'ejs');
app.set('views' , join(__dirname,'./views'));
app.use(express.static(join(__dirname,'./public')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', appRoutes);



app.listen(2021, '127.0.0.1', () => console.log('listen on port :2021'));