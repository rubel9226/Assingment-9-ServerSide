const { body } = require('express-validator');

// registration validation
const validateCreateBookings = [
    body('userEmail')
        .trim()
        .notEmpty()
        .withMessage('Email is required, Enter your email address.')
        .isEmail()
        .withMessage('Invalid email address'),
    body('doctorName')
        .trim()
        .notEmpty()
        .withMessage('Doctor name is required.')
        .isLength({ min: 3, max: 31 })
        .withMessage('Doctor name should be at lest 3-31 characters long'),
    body('patientName')
        .trim()
        .notEmpty()
        .withMessage('Patient name is required.')
        .isLength({ min: 3, max: 31 })
        .withMessage('Patient name should be at lest 3-31 characters long'),
    body('phone')
        .trim()
        .notEmpty()
        .withMessage('Phone number is required.')
        .isLength({ min: 3, max: 31 })
        .withMessage('Phone number should be at lest 3-31 characters long'),
];




// sign in validation
module.exports = {
    validateCreateBookings
};