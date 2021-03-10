const express = require('express');
const app = express();
const apartmentRoutes = express.Router();

// Require Member model in our routes module
let Apartment = require('../models/apartment.model');
let ApartmentCommentFunction = require('../models/apartment.model');

// Defined store route
apartmentRoutes.route('/add').post(function (req, res) {
  let apartment = new Apartment(req.body);
  apartment.save()
    .then(apartment => {
      res.status(200).json({ 'Apartment': 'Apartment has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});



// Defined get data(index or listing) route
apartmentRoutes.route('/').get(function (req, res) {
    Apartment.find(function (err, apartment) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(apartment);
    }
  });
});


// Defined edit route
apartmentRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Apartment.findById(id, function (err, apartment) {
    res.json(apartment);
  });
});

apartmentRoutes.route('/check/:id').get(function (req, res) {
  let id = req.params.id;
  Apartment.findById(id, function (err, apartment) {
    res.json(apartment);
  });
});


//  Defined update route
apartmentRoutes.route('/update/:id').post(function (req, res) {
    Apartment.findById(req.params.id, function (err, apartment) {
    if (!apartment)
      res.status(404).send("Record not found");
    else {
        //CHANGE TO APARTMENT.MODE.JS
        // apartment.ApartmentName = req.body.ApartmentName;
        // apartment.ApartmentAddress = req.body.ApartmentAddress;
        // apartment.ApartmentWifi = req.body.ApartmentWifi;
        // apartment.ApartmentBedrooms = req.body.ApartmentBedrooms;
        // apartment.ApartmentBathroom = req.body.ApartmentBathroom;
        // apartment.ApartmentPrice = req.body.ApartmentPrice;
        // apartment.ApartmentDescription = req.body.ApartmentDescription;
        apartment.AptName = req.body.AptName;
        apartment.AptAd = req.body.AptAd;
        apartment.AptImg = req.body.AptImg;
        apartment.AptGm = req.body.AptGm;
        apartment.AptBed = req.body.AptBed;
        apartment.AptTv = req.body.AptTv;
        apartment.AptBath = req.body.AptBath;
        apartment.AptWifi = req.body.AptWifi;
        apartment.AptFan = req.body.AptFan;
        apartment.AptAir = req.body.AptAir;
        apartment.AptWater = req.body.AptWater;
        apartment.AptEle = req.body.AptEle;
        apartment.AptKit = req.body.AptKit;
        apartment.AptKitU = req.body.AptKitU;
        apartment.AptMonthly = req.body.AptMonthly;
        apartment.AptDesc = req.body.AptDesc;
        apartment.AptOwnFN  = req.body.AptOwnFN;
        apartment.AptOwnIMG = req.body.AptOwnIMG;
        apartment.AptOwnA = req.body.AptOwnA;
        apartment.AptOwnG = req.body.AptOwnG;
        apartment.AptOwnPN = req.body.AptOwnPN;
        apartment.AptOwnEA = req.body.AptOwnEA;
        apartment.AptOwnMA = req.body.AptOwnMA;

      apartment.save().then(apartment => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
apartmentRoutes.route('/delete/:id').get(function (req, res) {
    Apartment.findByIdAndRemove({ _id: req.params.id }, function (err, apartment) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});



module.exports = apartmentRoutes;