const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./Database/database.js");
// Routes
const authRoute = require("./Routes/auth.route.user.js");
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
// Controllers
// app.use(errorController.get404);
// app.use(errorController.get500);

app.get("/test", async (req, res) => {
  // add parameter if specific user
  const test = await helloWorld(27);
  res.send(test[0]);
});

function helloWorld(param){
  // query posts from all the users
  // return db.execute(`SELECT user_information.userId, user_information.username, properties_posted.propertyId, properties_posted.propertyTitle, properties_posted.propertyDescription FROM user_information, properties_posted WHERE properties_posted.userId = user_information.userId`);
  // Query posts from an specific user
  return db.execute(`SELECT user_information.userId, user_information.username, properties_posted.propertyId, properties_posted.propertyTitle, properties_posted.propertyDescription FROM user_information, properties_posted WHERE properties_posted.userId = ? AND user_information.userId = ?`, [param, param]);
}