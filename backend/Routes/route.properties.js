const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

// Retrieves and validates the local token before the controller could use it.
const authMiddleware = require('../Middleware/auth');

const propertiesController = require('../Controllers/controller.properties.js');

router.get('/', authMiddleware, propertiesController.fetchPosts);

router.get('/:propertyId', authMiddleware, propertiesController.viewPostsById);

router.post('/', [
    authMiddleware,
    body('propertyTitle').trim().isLength({ min: 5 }).not().isEmpty(),
    body('userId').trim().not().isEmpty(),
    body('propertyType').not().isEmpty(),
    body('propertyAddress').not().isEmpty(),
    body('propertyDescription').trim().isLength({ min: 10 }).not().isEmpty(),
    body('propertyImages').not().isEmpty(),
],propertiesController.addPosts);

router.delete('/:propertyId', authMiddleware, propertiesController.deletePosts);

module.exports = router;