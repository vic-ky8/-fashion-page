//create express module (1)
const express = require('express');
const ejs= require ('ejs');
const port = 3000;
const app = express();
app.use (express.static('public'));
app.set('view engine', 'ejs');
app.use('/assets',express.static('assets'));
app.use('photos',express.static('photos'));



// create server (2)
app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/about", (req, res)=>{
    res.render("about");
});
app.get("/services", (req, res)=>{
    res.render("services");
});
app.get("/nav", (req, res)=>{
    res.render("nav");
});

app.listen(port,() => console.log('i am running on port 3000'));


