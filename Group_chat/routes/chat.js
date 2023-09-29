const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
   var username = localStorage.getItem("username");
   fs.readFile("messages.txt",(err,data)=>{
      if(err){
         console.log(err)
         data="No chat exist";
      }
      res.send(`<h2 style="text-align:center">Welcome ,${username}!</h2>
      ${data}
      <form action="/" method="post">
      <label for="message">Enter your message:</label>
      <input type="text" id="message" name="message">
      <button type="submit">Send</button>
    </form>
      `)
      
   })
});

router.post("/", (req, res) => {
   var username = localStorage.getItem("username");
   var { message } = req.body;

   fs.appendFile("messages.txt", `${username}:${message}. `, (err) => {
      err?console.log(err):res.redirect("/");
   });
});

module.exports = router;
