const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Faculty = new Schema({
    facultyHomeAddress: {
        type: String
    },
    facultyHomeImage: {
        type: String
    },
    facultyHomeImages: {
        type: String
    },
    facultyRooms: {
        type: String
    },
    facultyPerRoom: {
        type: String
    },
    facultyBathroom: { //5
        type: String
    },
    facultyTelevision: {
        type: String
    },
    facultyInternetAccess: {
        type:  String
    },
    facultyAircondition: {
        type: String
    },
    // (facultyHomeAddress, facultyHomeImage, facultyHomeImages, facultyRooms, facultyPerRoom, facultyBathroom,
    //  facultyTelevision, facultyInternetAccess, facultyAircondition, facultyElectricFan, facultyFoodFee,
    //  facultyMonthlyFee, facultyDescription, facultyName, facultyImage, facultyAge, 
    //  facultyGender, facultyPhoneNumber, facultyEmailAddress)
    // 18 Variables
    facultyElectricFan: { 
        type: String
    },
    facultyFoodFee: { //10
        type: String
    },
    facultyMonthlyFee: {
        type: String
    },
    facultyDescription: {
        type: String
    },
    facultyName: {
        type: String
    },
    facultyImage: {
        type: String
    },
    facultyAge: { //15
    type: String
     },
    facultyGender: {
        type: String
    },
    facultyPhoneNumber: {
        type: String
    },
    facultyEmailAddress: {
        type: String
    },
}, {
    timestamps: true,
    collection: 'Faculty'
});

// let FacultyCommentFunction = new Schema({
//     FacultytName: { //Commentor Name
//       type: String
//     },
//     FacultyComment: { //Comment Msg
//       type: String
//     }
//   },
//   {
//     timestamps: true,
//     collection: 'FacultyCommentFunction'
//   });

module.exports = mongoose.model('Faculty', Faculty);
// module.exports = mongoose.model('FacultyCommentFunction', FacultyCommentFunction);