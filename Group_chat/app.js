const express = require("express");
const app = express();
const fs = require("fs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const login = require("./routes/login.js");
const chat = require("./routes/chat.js");
const send=require('./routes/send.js')
app.use(login);
app.use(chat);
app.use(send);

app.use((req, res, next) => {
   res.status(404).send("<h1>Page Not Found!</h1>");
});

const port=4000;
app.listen(port, () => {
   console.log(`server running on port ${port}`);
});
