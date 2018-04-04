"use strict";

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This will be the entry file for server
var app = (0, _express2.default)();

app.use(_bodyParser2.default.json()); // [Q] .json()
app.use(_bodyParser2.default.urlencoded({ extended: false })); // [Q] why need to .urlencoded()

var router = _express2.default.Router();
router.get("/", function (req, res) {
  res.status(200);
  res.json("you are at the home page");
});
router.get("/cities", function (req, res) {
  var cities = [{ name: "NYC", population: 1111 }, { name: "LA", population: 2222 }, { name: "SHA", population: 3333 }];
  res.json(cities);
});
app.use(router);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), function () {
  console.log("You are Listening on " + app.get("port"));
});