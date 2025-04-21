const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const familyController = require('../controllers/familyController');

// Validation middleware for create-group
const createGroupValidation = [
  // Carrier fields
  body('carrierName').notEmpty().withMessage('Carrier name is required'),
  body('dateOfBirth')
    .notEmpty().withMessage('Date of birth is required')
    .isDate().withMessage('Date of birth must be a valid date (YYYY-MM-DD)'),
  body('diagnosis').optional().isString().withMessage('Diagnosis must be a string'),
  body('notes').optional().isString().withMessage('Notes must be a string'),
  body('goal').optional().isString().withMessage('Goal must be a string'),
  // Family fields
  body('familyName').notEmpty().withMessage('Family name is required'),
  body('adminRelation')
    .notEmpty().withMessage('Admin relation is required')
    .isIn(['family', 'friend', 'partner']).withMessage('Admin relation must be one of: family, friend, partner')
];

// Create family and carrier with validation
router.post('/create-group', createGroupValidation, familyController.createFamilyAndCarrier);

module.exports = router;