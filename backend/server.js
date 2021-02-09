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

app.listen(3000, () =>
  console.log(`Running at port ${process.env.SERVER_PORT}`)
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
app.use(errorController.get404);
app.use(errorController.get500);

app.get("/users/hi", (req, res) => {
  db.getConnection((err, conn) => {
    if (err) throw err;
    conn.query("SELECT * from user_information", (err, rows) => {
      if (err) throw err;
      res.send(rows);
    });
  });
});
