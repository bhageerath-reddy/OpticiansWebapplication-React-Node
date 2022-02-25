const mongodb = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoClient = mongodb.MongoClient;
var flash = require("connect-flash");
var bodyParser = require("body-parser");
const { Router } = require("express");
app.use(bodyParser.urlencoded({ extended: false }));
const url = "mongodb://localhost:27017";
const dbName = "bramptonsData";
mongoClient.connect(url, (err, client) => {
  if (err) {
    console.log("error connecting to database :" + err);
  } else {
    console.log("Connected to database");
    db = client.db(dbName);
  }
});

const router = express.Router();
app.use(cors());
app.use(express.json());

app.post("/BookAppoint", (req, res) => {
  collection = db.collection("appointments");
  collection.insertOne(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Appointment booked.");
    }
  });
});

app.post("/SalesBook", (req, res) => {
  collection = db.collection("salesdata");
  collection.insertOne(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Sales data updated successfully");
    }
  });
});

app.post("/delete", (req, res) => {
  collection = db.collection("cart");
  collection.deleteOne({ name: req.body.name }, function (err, results) {});
});
app.listen(7000, () => console.log("server is running"));
