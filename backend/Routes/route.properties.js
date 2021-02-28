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
    body('userId').trim().not().isEmpty(),
    body('propertyTitle').trim().isLength({ min: 5 }).not().isEmpty(),
    body('propertyDescription').trim().isLength({ min: 10 }).not().isEmpty(),
],propertiesController.addPosts);

router.delete('/:propertyId', authMiddleware, propertiesController.deletePosts);

module.exports = router;