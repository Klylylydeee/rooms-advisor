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

app.listen(process.env.PORT || 5000, () =>
  console.log(`Running at port http://localhost:${process.env.PORT}/`)
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

app.get("/", (req, res) => {
  res.send(`<div style="padding: 0; margin: 0; min-height: 97vh; display: flex; justify-content: center; align-items: center;"><h1 style="padding: 0; margin: 0; font-family: 'Bungee Inline', cursive; font-size: 2rem;">Authorization key is needed to access RoomsAdvisor API. <br> Pls contact the Developer [Guevarra, Klyde] for further access.</h1></div>`);
});

app.post("/test", async (req, res) => {
// app.get("/test/:testid", async (req, res) => {
  // add parameter if specific user
  userId = req.body.userId;
  username = req.body.username;
  password = req.body.password;
  email = req.body.email;
  userPicture = req.body.userPicture;
  const test = await helloWorld(userId, username, password, email, userPicture);
  // const test = await helloWorld();
  res.status(200);
  res.send(test[0]);
});
  
function helloWorld(userId, username, password, email, userPicture){
  // return db.execute(`SELECT TIME_FORMAT(properties_posted.dateCreated, "%l:%i:%s %p") AS date_formatted FROM user_information, properties_posted WHERE properties_posted.userId = user_information.userId`);
  // query posts from all the users
  // return db.execute(`SELECT user_information.userId, user_information.username, properties_posted.propertyId, properties_posted.propertyTitle, properties_posted.propertyDescription, DATE_FORMAT(properties_posted.dateCreated, "%M %e,%Y %l:%i%p") AS dateCreated FROM user_information, properties_posted WHERE properties_posted.userId = user_information.userId`);
  // Query posts from an specific user
  // return db.execute(`SELECT user_information.userId, user_information.username, properties_posted.propertyId, properties_posted.propertyTitle, properties_posted.propertyDescription FROM user_information, properties_posted WHERE properties_posted.userId = ? AND user_information.userId = ?`, [param, param]);
  // return db.execute(`SELECT user_information.userId, user_information.username, properties_posted.propertyId, properties_posted.propertyTitle, properties_posted.propertyDescription FROM user_information, properties_posted WHERE user_information.userId = ? AND properties_posted.userId = user_information.userId`, [param]);
  return db.execute(`INSERT INTO user_information (userId, username, password, email, userPicture) VALUES (?, ?, ?, ?, ?)`, [userId, username, password, email, userPicture]);
}

// Routes
app.use("/api/auth", authRoute);
app.use("/api/properties", propertiesRoute);
// Controllers
app.use(errorController.get404);
app.use(errorController.get500);
