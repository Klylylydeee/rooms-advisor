const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./database/db');
// memberRoute = require('./routes/member.route');
apartmentRoute = require('./routes/apartment.route');
dormitoryRoute = require('./routes/dormitory.route');
facultyRoute = require('./routes/faculty.route');
bedspacerRoute= require('./routes/spacer.route');
require('dotenv').config();

// mongoose.Promise = global.Promise;
// mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true }).then(
//     () => { console.log('Database is connected') },
//     err => { console.log('Can not connect to the database' + err) }
// );

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://admin:<password>@roomadvisor-pnprj.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use('/members', memberRoute);
app.use('/apartments', apartmentRoute);
app.use('/dormitory', dormitoryRoute);
app.use('/faculty', facultyRoute);
app.use('/bedspacer', bedspacerRoute);

app.get('/', function (req, res) {
  res.send('Welcome to Heroku Server!');
});

const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});