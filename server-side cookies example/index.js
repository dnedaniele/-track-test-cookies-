// Explanation Video: https://www.youtube.com/watch?v=sovAIX4doOE&feature=youtu.be

const express = require("express");

const app = express();

app.get("/", (req, res) => {

  // create a Cookie from Javascript
  res.sendFile(`${__dirname}/index.html`);

  // Create Cookies From the Server
  res.setHeader("set-cookie", ["cookieFromServer = 1"])

});

app.listen(8080, () => console.log("listening on post 8080"));
