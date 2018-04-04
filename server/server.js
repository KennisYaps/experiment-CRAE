// This will be the entry file for server
import bodyParser from "body-parser";
import express from "express";
const app = express();

app.use(bodyParser.json()); // [Q] .json()
app.use(bodyParser.urlencoded({ extended: false })); // [Q] why need to .urlencoded()

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
