const express = require('express');
const app = express();
const facultyRoutes = express.Router();

let Faculty = require('../models/faculty.model');

facultyRoutes.route('/add').post(function (req, res) {
  let faculty = new Faculty(req.body);
  faculty.save()
    .then(faculty => {
      res.status(200).json({ 'faculty': 'faculty has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

facultyRoutes.route('/').get(function (req, res) {
  Faculty.find(function (err, faculty) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(faculty);
    }
  });
});

facultyRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Faculty.findById(id, function (err, faculty) {
    res.json(faculty);
  });
});
facultyRoutes.route('/check/:id').get(function (req, res) {
  let id = req.params.id;
  Faculty.findById(id, function (err, faculty) {
    res.json(faculty);
  });
});


facultyRoutes.route('/update/:id').post(function (req, res) {
  Faculty.findById(req.params.id, function (err, faculty) {
    if (!faculty)
      res.status(404).send("Record not found");
    else {
        faculty.facultyHomeAddress = req.body.facultyHomeAddress;
        faculty.facultyHomeImage = req.body.facultyHomeImage;
        faculty.facultyHomeImages = req.body.facultyHomeImages;
        faculty.facultyRooms = req.body.facultyRooms;
        faculty.facultyPerRoom = req.body.facultyPerRoom;
        faculty.facultyBathroom = req.body.facultyBathroom;

        faculty.facultyTelevision = req.body.facultyTelevision;
        faculty.facultyInternetAccess = req.body.facultyInternetAccess;
        faculty.facultyAircondition = req.body.facultyAircondition;
        faculty.facultyElectricFan = req.body.facultyElectricFan;
        faculty.facultyFoodFee = req.body.facultyFoodFee;

        faculty.facultyMonthlyFee = req.body.facultyMonthlyFee;
        faculty.facultyDescription = req.body.facultyDescription;
        faculty.facultyName = req.body.facultyName;
        faculty.facultyImage = req.body.facultyImage;
        faculty.facultyAge = req.body.facultyAge;

        faculty.facultyGender = req.body.facultyGender;
        faculty.facultyPhoneNumber  = req.body.facultyPhoneNumber;
        faculty.facultyEmailAddress = req.body.facultyEmailAddress;
        
        faculty.save().then(faculty => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

facultyRoutes.route('/delete/:id').get(function (req, res) {
    Faculty.findByIdAndRemove({ _id: req.params.id }, function (err, faculty) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});


module.exports = facultyRoutes;