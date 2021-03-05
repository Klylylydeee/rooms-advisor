const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');

const Properties = require('../Models/propertiesPosted');

exports.fetchPosts = async (req, res, next) => {
    try{
        const [allPosts] = await Properties.fetch();
        res.status(200).json(allPosts);
    } catch(error){
        if(!error.statusCode) {
            error.status = 500
        } 
        return next(error);
    }
}

exports.addPosts = async (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()){
        return 
    }

    const propertyTitle = req.body.propertyTitle;
    const userId = req.body.userId;
    const propertyType = req.body.propertyType;
    const propertyAddress = req.body.propertyAddress;
    const propertyDescription = req.body.propertyDescription;
    const propertyImages = req.body.propertyImages

    try {
        const propertiesPost = {
            propertyTitle: propertyTitle,
            userId: userId,
            propertyType: propertyType,
            propertyAddress: propertyAddress,
            propertyDescription: propertyDescription,
            propertyImages: propertyImages
        }

        const result = await Properties.post(propertiesPost);

        res.status(201).json({
            message: 'Property has been posted!'
        });
    } catch(error) {
        if(!error.statusCode) {
            error.status = 500
        } 
        return next(error);
    }
}

exports.viewPostsById = async (req, res, next) => {
    try{
        const [viewProperty] = await Properties.view(req.params.propertyId);
        res.status(200).json(viewProperty);
    } catch(error){
        if(!error.statusCode) {
            error.status = 500
        } 
        return next(error);
    }
}

exports.deletePosts = async (req, res, next) => {
    try{
        const deleteProperty = await Properties.delete(req.params.propertyId);
        res.status(200).json({
            message: 'Property has been deleted successfully!'
        });
    } catch(error){
        if(!error.statusCode) {
            error.status = 500
        } 
        return next(error);
    }
}