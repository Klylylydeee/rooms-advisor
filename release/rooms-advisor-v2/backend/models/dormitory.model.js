const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Dormitory = new Schema({
  dormName: {
    type: String
  },
  dormAdress:  {
    type: String
  },
  dormImage:  {
    type: String
  },
  dormImages:  {
    type: String
  },
  dormRooms: { //5
    type: String
  },
  dormStudentPerRoom:  {
    type: String
  },
  dormBathroom:  {
    type: String
  },
  dormTelevision:  {
    type: String
  },
  dormInternetAccess:  {
    type: String
  },
  // (dormName, dormAdress, dormImage, dormImages, dormRooms,
  // dormStudentPerRoom, dormBathroom, dormTelevision, dormInternetAccess, dormAircondition,
  // dormElectricFan, dormKitchen, dormKitchenUtensils ,dormMonthlyFee, dormDescription, 
  // dormDeanName, dormDeanImage,dormDeanAge, dormDeanGender, dormDeanPhoneNumber, 
  // dormDeanEmailAddress)
  // 21 Variables
  dormAircondition:  { //10
    type: String
  },
  dormElectricFan:  {
    type: String
  },
  dormKitchen: {
    type: String
  },
  dormKitchenUtensils:  {
    type: String
  },
  dormMonthlyFee: {
    type: String
  },
  dormDescription:  { //15
    type: String
  },
  dormDeanName: {
    type: String
  }, 
  dormDeanImage: {
    type: String
  },
  dormDeanAge: {
    type: String
  },
  dormDeanGender: {
    type: String
  },
  dormDeanPhoneNumber: { //20
    type: String
  },
  dormDeanEmailAddress: {
    type: String
  },
},{
  timestamps: true,
      collection: 'Dormitory'
  });
  
// let DormitoryCommentFunction = new Schema({
//     DormitorytName: { //Commentor Name
//       type: String
//     },
//     DormitoryComment: { //Comment Msg
//       type: String
//     }
//   },
//   {
//     timestamps: true,
//     collection: 'DormitoryCommentFunction'
//   });

module.exports = mongoose.model('Dormitory', Dormitory);
// module.exports = mongoose.model('DormitoryCommentFunction', DormitoryCommentFunction);