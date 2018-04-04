// This will be the entry file for server
import bodyParser from "body-parser";
import express from "express";
const app = express();

app.use(bodyParser.json()); // [Q] .json()
app.use(bodyParser.urlencoded({ extended: false })); // [Q] why need to .urlencoded()

// [To configure the server project to also serve up the react project]
//add the path module
import path from "path";
// get reference to the client build directory
const staticFiles = express.static(path.join(_dirname, "../client-app/build"));
//pass the static files (react app) to the express app
app.use(staticFiles);
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200);
  res.json("you are at the home page");
});
router.get("/cities", (req, res) => {
  const cities = [
    { name: "NYC", population: 1111 },
    { name: "LA", population: 2222 },
    { name: "SHA", population: 3333 }
  ];
  res.json(cities);
});
app.use(router);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`You are Listening on ${app.get("port")}`);
});
