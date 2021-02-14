const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./Database/database.js");
// Routes
const authRoute = require("./Routes/auth.route.user.js");
const propertiesRoute = require("./Routes/route.properties");

// Controllers
const errorController = require("./Controllers/controller.errorStatus.js");

require("dotenv").config({
  path: "./Configs/.env"
});

const app = express();

app.use(bodyParser.json({ extend: false }));

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Running at port http://localhost:${process.env.SERVER_PORT}/`)
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, X-Custom-Header, Authorization"
  );
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/properties", propertiesRoute);
// Controllers
app.use(errorController.get404);
app.use(errorController.get500);

// app.get("/test", async (req, res) => {
app.get("/test/:testid", async (req, res) => {
  // add parameter if specific user
  var id = req.params.testid;
  const test = await helloWorld(id);
  // const test = await helloWorld();
  res.send(test[0]);
});

function helloWorld(param){
  // return db.execute(`SELECT TIME_FORMAT(properties_posted.dateCreated, "%l:%i:%s %p") AS date_formatted FROM user_information, properties_posted WHERE properties_posted.userId = user_information.userId`);
  // query posts from all the users
  // return db.execute(`SELECT user_information.userId, user_information.username, properties_posted.propertyId, properties_posted.propertyTitle, properties_posted.propertyDescription, DATE_FORMAT(properties_posted.dateCreated, "%M %e,%Y %l:%i%p") AS dateCreated FROM user_information, properties_posted WHERE properties_posted.userId = user_information.userId`);
  // Query posts from an specific user
  // return db.execute(`SELECT user_information.userId, user_information.username, properties_posted.propertyId, properties_posted.propertyTitle, properties_posted.propertyDescription FROM user_information, properties_posted WHERE properties_posted.userId = ? AND user_information.userId = ?`, [param, param]);
  return db.execute(`SELECT user_information.userId, user_information.username, properties_posted.propertyId, properties_posted.propertyTitle, properties_posted.propertyDescription FROM user_information, properties_posted WHERE user_information.userId = ? AND properties_posted.userId = user_information.userId`, [param]);
}