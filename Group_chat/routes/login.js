const express = require("express");
const fs = require("fs");
const router = express.Router();

var LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./scratch");

router.get("/login", (req, res) => {
   res.send(`<form action="/login" method="POST">
        <label for="username">Enter Your Name:</label>
        <input type="text" id="username" name="username">
        <label for="email">Enter Your Email:</label>
        <input type="email" id="email" name="email">
        <button type="submit">Login</button>  
        </form>`);
});

router.post("/login", (req, res) => {
   const {  username } = req.body;
   console.log(username)
   localStorage.clear();
   localStorage.setItem("username", username);
   fs.appendFile("messages.txt",` `,(err)=>{
      err?console.log(err):res.redirect("/");
   })
   
});

module.exports = router;
