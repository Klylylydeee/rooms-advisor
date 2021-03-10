const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bedspacer = new Schema({
  bedHomeName: {
    type: String
  },
  bedAdress:  {
    type: String
  },
  bedImage:  {
    type: String
  },
  bedImages:  {
    type: String
  },
  bedRooms: { //5
    type: String
  },
  bedStudentPerRoom:  {
    type: String
  },
  bedBathroom:  {
    type: String
  },
  bedTelevision:  {
    type: String
  },
  bedInternetAccess:  {
    type: String
  },
  // (bedHomeName, bedAdress, bedImage, bedImages, bedRooms,
  // bedStudentPerRoom, bedBathroom, bedTelevision, bedInternetAccess, bedAircondition,
  // bedElectricFan, bedKitchen ,bedMonthlyFee, bedDescription, bedOwnerName,
  //  bedOwnerImage,bedOwnerAge, bedOwnerGender, bedOwnerPhoneNumber, bedOwnerEmailAddress)
  // 20 Variables
  bedAircondition:  { //10
    type: String
  },
  bedElectricFan:  {
    type: String
  },
  bedKitchen: {
    type: String
  },
  bedMonthlyFee: {
    type: String
  },
  bedDescription:  {
    type: String
  },
  bedOwnerName: { //15
    type: String
  }, 
  bedOwnerImage: {
    type: String
  },
  bedOwnerAge: {
    type: String
  },
  bedOwnerGender: {
    type: String
  },
  bedOwnerPhoneNumber: {
    type: String
  },
  bedOwnerEmailAddress: { //20
    type: String
  },
},{
  timestamps: true,
      collection: 'Bedspacer'
  });

  // let BedspacerCommentFunction = new Schema({
  //   BedspacertName: { //Commentor Name
  //     type: String
  //   },
  //   BedspacerComment: { //Comment Msg
  //     type: String
  //   }
  // },
  // {
  //   timestamps: true,
  //   collection: 'BedspacerCommentFunction'
  // });

module.exports = mongoose.model('Bedspacer', Bedspacer);
// module.exports = mongoose.model('BedspacerCommentFunction', BedspacerCommentFunction);