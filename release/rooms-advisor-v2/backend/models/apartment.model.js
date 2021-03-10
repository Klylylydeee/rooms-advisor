const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Apartment = new Schema({
  AptName: { // Apartment Name
    type: String
  },
  AptAd:  { // Apartment Address
    type: String
  },
  AptImg:  { // Apartment Image
    type: String
  },
  AptGm:  { // Apartment Image (2) got tired for renaming
    type: String
  },
  AptBed: { // Apartment Bedrooms
    type: String
  },
  AptTv:  { // Apartment Tv's
    type: String
  },
  AptBath:  { // Apartment Bathroom's
    type: String
  },
  AptWifi:  { // Aoartment Wifi
    type: String
  },
  AptFan:  { // Apartment Electric Fan
    type: String
  },
  AptAir:  {
    type: String
  },
  AptWater: {
    type: String
  },
  AptEle: {
    type: String
  },
  AptKit: {
    type: String
  },
  AptKitU:  {
    type: String
  },
  AptMonthly: {
    type: String
  },
  AptDesc:  {
    type: String
  },
  AptOwnFN: {
    type: String
  },
  AptOwnIMG: {
    type: String
  },
  AptOwnA: {
    type: String
  },
  AptOwnG: {
    type: String
  },
  AptOwnPN: {
    type: String
  },
  AptOwnEA: {
    type: String
  },
  AptOwnMA: {
    type: String
  },
},
  {
  timestamps: true,
      collection: 'Apartment'
  });

// let ApartmentCommentFunction = new Schema({
//   ApartmentName: { //Commentor Name
//     type: String
//   },
//   ApartmentComment: { //Comment Msg
//     type: String
//   }
// },
// {
//   timestamps: true,
//   collection: 'ApartmentCommentFunction'
// });

module.exports = mongoose.model('Apartment', Apartment);
// module.exports = mongoose.model('ApartmentCommentFunction', ApartmentCommentFunction);

// AptOwnFN,AptOwnA,AptOwnG,AptOwnPN,AptOwnEA,AptOwnMA