const express = require('express');
const { seedDoctors, getAllDoctors, getSingleDoctor } = require('../controllers/doctors.controller');
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
    getSingleDoctor
);

module.exports = doctorsRouter;


