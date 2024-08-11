// We are going to recreate the web app with express

const express = require("express");

const app = express();

//listen for request
app.listen(3000);

//routing to various views
app.get('/',(req,res)=>{
    res.sendFile("./views/index.html", {root: __dirname})
})

app.get('/about',(req,res)=>{
    res.sendFile("./views/about.html", {root: __dirname})
})

app.get('/blog',(req,res)=>{
    res.sendFile("./views/blog.html", {root: __dirname})
})

// for 404 pages
app.use((req,res)=>{
    res.sendFile("./views/404.html", {root:__dirname})
})