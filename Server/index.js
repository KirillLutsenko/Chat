const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

const pullConnects = [];

express()
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .get("/connect", (req, res) => {
    pullConnects.push(res);
  })
  .get("/getmessage", (req, _) => {
    const q = req.query;

    while (pullConnects.length) {
      try {
        const res = pullConnects.pop();
        res.json(q);
      } catch (error) {}
    }

    _.send(null);
  })
  .post("/postmessage", (req, _) => {
    const q = req.body;

    while (pullConnects.length) {
      try {
        const res = pullConnects.pop();
        res.json(q);
      } catch (error) {}
    }

    _.send(null);
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
