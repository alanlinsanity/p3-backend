const express = require("express"); 
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to Project 3 Backend!");
});

app.listen(port, () => {
    console.log("Hello...");
});