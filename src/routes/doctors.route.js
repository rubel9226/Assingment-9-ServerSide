const express = require('express');
const { seedDoctors, getAllDoctors, getSingleDoctor } = require('../controllers/doctors.controller');
const { verifyToken } = require('../middlewares/booking.middleware');
const doctorsRouter = express.Router();


// POST /api/doctors
doctorsRouter.post(
    '/',
    seedDoctors
);


// get /api/doctors
doctorsRouter.get(
    '/',
    getAllDoctors
);


// get /api/doctors/:id
doctorsRouter.get(
    '/:id',
    verifyToken,
    getSingleDoctor
);

module.exports = doctorsRouter;


