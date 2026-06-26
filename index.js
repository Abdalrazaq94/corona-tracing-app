// this is the main entry point for your full app
// it serves your frontend & provides access to your API

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config");
const api = require("./api/");

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.method + ": " + req.path);
  next();
});

app.use("/", express.static(__dirname + "/client/build/"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});
app.use("/dashboard", express.static(__dirname + "/client/build/"));
app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

app.use("/api", api);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).end();
});

app.listen(process.env.PORT || config.PORT, () => {
  console.log(
    `listening at http://localhost:${process.env.PORT || config.PORT} (${config.MODE} mode)`
  );
}); 