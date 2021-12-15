const express = require('express');
const route = express.Router();
const { join } = require('path');
route.use(express.static(join(__dirname,'../public')))



route.get('/',(req,res) =>{
    const list = require(join(__dirname,'../public/data/list.json'))
    res.render(join(__dirname,'../views/home.ejs'),{list:list});
});
route.get('/home',(req,res) =>{
    const list = require(join(__dirname,'../public/data/list.json'))
    res.render(join(__dirname,'../views/home.ejs'),{list:list});
});

route.get('/aboute',(req,res) =>{
    res.render(join(__dirname,'../views/aboute.ejs'));
});
route.get('/contact',(req,res) =>{
    res.render(join(__dirname,'../views/contact.ejs'));
});
route.get('/product',(req,res) =>{
    res.render(join(__dirname,'../views/product.ejs'));
});



module.exports = route;
