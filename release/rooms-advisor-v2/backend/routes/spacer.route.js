const express = require('express');
const app = express();
const bedspacerRoutes = express.Router();

let Bedspacer = require('../models/spacer.model');

bedspacerRoutes.route('/add').post(function (req, res) {
  let bedspacer = new Bedspacer(req.body);
  bedspacer.save()
    .then(bedspacer => {
      res.status(200).json({ 'bedspacer': 'bedspacer has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

bedspacerRoutes.route('/').get(function (req, res) {
  Bedspacer.find(function (err, bedspacer) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(bedspacer);
    }
  });
});

bedspacerRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Bedspacer.findById(id, function (err, bedspacer) {
    res.json(bedspacer);
  });
});
bedspacerRoutes.route('/check/:id').get(function (req, res) {
  let id = req.params.id;
  Bedspacer.findById(id, function (err, bedspacer) {
    res.json(bedspacer);
  });
});


bedspacerRoutes.route('/update/:id').post(function (req, res) {
  Bedspacer.findById(req.params.id, function (err, bedspacer) {
    if (!bedspacer)
      res.status(404).send("Record not found");
    else {
      bedspacer.bedHomeName = req.body.bedHomeName;
      bedspacer.bedAdress = req.body.bedAdress;
      bedspacer.bedImage = req.body.bedImage;
      bedspacer.bedImages = req.body.bedImages;
      bedspacer.bedRooms = req.body.bedRooms;

      bedspacer.bedStudentPerRoom = req.body.bedStudentPerRoom;
      bedspacer.bedBathroom = req.body.bedBathroom;
      bedspacer.bedTelevision = req.body.bedTelevision;
      bedspacer.bedInternetAccess = req.body.bedInternetAccess;
      bedspacer.bedAircondition = req.body.bedAircondition;

      bedspacer.bedElectricFan = req.body.bedElectricFan;
      bedspacer.bedKitchen = req.body.bedKitchen;
      bedspacer.bedMonthlyFee = req.body.bedMonthlyFee;
      bedspacer.bedDescription = req.body.bedDescription;
      bedspacer.bedOwnerName = req.body.bedOwnerName;

      bedspacer.bedOwnerImage = req.body.bedOwnerImage;
      bedspacer.bedOwnerAge = req.body.bedOwnerAge;
      bedspacer.bedOwnerGender = req.body.bedOwnerGender;
      bedspacer.bedOwnerPhoneNumber = req.body.bedOwnerPhoneNumber;
      bedspacer.bedOwnerEmailAddress = req.body.bedOwnerEmailAddress;
      
      bedspacer.save().then(bedspacer => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

bedspacerRoutes.route('/delete/:id').get(function (req, res) {
  Bedspacer.findByIdAndRemove({ _id: req.params.id }, function (err, bedspacer) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = bedspacerRoutes;