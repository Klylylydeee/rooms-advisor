const express = require('express');
const app = express();
const dormitoryRoutes = express.Router();

let Dormitory = require('../models/dormitory.model');

// Defined store route
dormitoryRoutes.route('/add').post(function (req, res) {
  let dormitory = new Dormitory(req.body);
  dormitory.save()
    .then(dormitory => {
      res.status(200).json({ 'dormitory': 'dormitory has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database" + `${err}`);
    });
});

// Defined get data(index or listing) route
dormitoryRoutes.route('/').get(function (req, res) {
  Dormitory.find(function (err, dormitory) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(dormitory);
    }
  });
});

dormitoryRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Dormitory.findById(id, function (err, dormitory) {
    res.json(dormitory);
  });
});
dormitoryRoutes.route('/check/:id').get(function (req, res) {
  let id = req.params.id;
  Dormitory.findById(id, function (err, dormitory) {
    res.json(dormitory);
  });
});


dormitoryRoutes.route('/update/:id').post(function (req, res) {
    Dormitory.findById(req.params.id, function (err, dormitory) {
    if (!dormitory)
      res.status(404).send("Record not found");
    else {
        dormitory.dormName = req.body.dormName;
        dormitory.dormAdress = req.body.dormAdress;
        dormitory.dormImage = req.body.dormImage;
        dormitory.dormImages = req.body.dormImages;
        dormitory.dormRooms = req.body.dormRooms;

        dormitory.dormStudentPerRoom = req.body.dormStudentPerRoom;
        dormitory.dormBathroom = req.body.dormBathroom;
        dormitory.dormTelevision = req.body.dormTelevision;
        dormitory.dormInternetAccess = req.body.dormInternetAccess;
        dormitory.dormAircondition = req.body.dormAircondition;

        dormitory.dormElectricFan = req.body.dormElectricFan;
        dormitory.dormKitchen = req.body.dormKitchen;
        dormitory.dormKitchenUtensils = req.body.dormKitchenUtensils;
        dormitory.dormMonthlyFee = req.body.dormMonthlyFee;
        dormitory.dormDescription = req.body.dormDescription;
        
        dormitory.dormDeanName = req.body.dormDeanName;
        dormitory.dormDeanImage  = req.body.dormDeanImage;
        dormitory.dormDeanAge = req.body.dormDeanAge;
        dormitory.dormDeanGender = req.body.dormDeanGender;
        dormitory.dormDeanPhoneNumber = req.body.dormDeanPhoneNumber;
        dormitory.dormDeanEmailAddress = req.body.dormDeanEmailAddress;

        
        dormitory.save().then(dormitory => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

dormitoryRoutes.route('/delete/:id').get(function (req, res) {
    Dormitory.findByIdAndRemove({ _id: req.params.id }, function (err, dormitory) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = dormitoryRoutes;