const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const propertiesController = require('../Controllers/controller.properties.js');

router.get('/', propertiesController.fetchPosts);

router.post('/', [
    body('userId').trim().not().isEmpty(),
    body('propertyTitle').trim().isLength({ min: 5 }).not().isEmpty(),
    body('propertyDescription').trim().isLength({ min: 10 }).not().isEmpty(),
],propertiesController.addPosts);

router.delete('/:propertyId', propertiesController.deletePosts);

module.exports = router;