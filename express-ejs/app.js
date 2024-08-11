// We are going to recreate the web app with express

const express = require("express");

const app = express();
app.set("view engine", "ejs");

//listen for request
app.listen(3000);

//routing to various views
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blog", (req, res) => {
    const blogs = [
        {
            title: "What is Lorem Ipsum",
            snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            title: "What is Lorem Ipsum",
            snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            title: "What is Lorem Ipsum",
            snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];

    res.render("blog", { title: "Blog", blogs });
});
app.get("/create/blog", (req, res) => {
    res.render("create", { title: "create blog" });
});
// for 404 pages
app.use((req, res) => {
    res.status(404).render("404", { title: "404 page" });
});
