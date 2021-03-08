const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const Reviews = require('../Models/propertiesReviews');

exports.getRev = async (req, res, next) => {
    
    const propertyId = req.params.propertyId;

    try{
        const [reviews] = await Reviews.getReviews(propertyId);
        res.status(200).json(reviews);
    } catch(error){
        if(!error.statusCode) {
            error.status = 500
        } 
        return next(error);
    }
}

exports.addRev = async (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()){
        return 
    }

    const propertyId = req.body.propertyId;
    const userId = req.body.userId;
    const reviewComment = req.body.reviewComment;
    const reviewRate = req.body.reviewRate;

    try {
        const reviewDatas = {
            propertyId: propertyId,
            userId: userId,
            reviewComment: reviewComment,
            reviewRate: reviewRate
        }

        const result = await Reviews.addReview(reviewDatas);

        res.status(201).json({
            message: 'Comment has been added!'
        });
    } catch(error) {
        if(!error.statusCode) {
            error.status = 500
        } 
        return next(error);
    }
}
