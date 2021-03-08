const express = require('express');
const router = express.Router();

const { body } = require('express-validator');

const authMiddleware = require('../Middleware/auth');

const reviewsController = require('../Controllers/controller.reviews');

router.get('/:propertyId', authMiddleware, reviewsController.getRev);

router.post('/', [
    authMiddleware,
    body('propertyId').trim().not().isEmpty(),
    body('userId').trim().not().isEmpty(),
    body('reviewComment').trim().not().isEmpty(),
    body('reviewRate').trim().not().isEmpty(),
],reviewsController.addRev);


module.exports = router;