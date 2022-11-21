const express = require('express');
const res = require('express/lib/response');
const path = require('path');

let staticPath = path.join(__dirname, "client");

const app = express();

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
})

app.get("/product", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "product.html"));
})

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "signup.html"));
})


app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "login.html"));
})

app.post('/signup', function (req, res) {
    console.log("created user:"+ req.body)
    res.sendFile(path.join(__dirname, "client", "index.html"));
    res.end();
  });

app.use((req, res) => {
    res.redirect("/product");
})

app.listen(3000, () => {
    console.log('Listening on port 3000....');
})