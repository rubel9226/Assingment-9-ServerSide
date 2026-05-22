const express = require('express');
const { handleCreateBookings, handleUpdateBooking, handleGetBookings, handleDeleteBookings } = require('../controllers/user.controller');
const { validateCreateBookings } = require('../validators/auth');
const runValidation = require('../validators');
const { logger, verifyToken } = require('../middlewares/booking.middleware');
const bookingRouter = express.Router();


// POST /api/users/register
bookingRouter.post(
    '/bookings',
    validateCreateBookings, 
    runValidation,
    verifyToken,
    handleCreateBookings
);


// get /api/users/bookings-update/:userId
bookingRouter.get(
    '/bookings/:userId',
    verifyToken,
    handleGetBookings

)


// Put /api/users/bookings-update/id
bookingRouter.put(
    '/booking-update/:id',
    verifyToken,
    handleUpdateBooking
);


// delete /api/users/bookings/:id
bookingRouter.delete(
    '/booking/:id',
    verifyToken,
    handleDeleteBookings
);





module.exports = bookingRouter;


