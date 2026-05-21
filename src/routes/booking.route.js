const express = require('express');
const { handleCreateBookings, handleUpdateBooking, handleGetBookings, handleDeleteBookings } = require('../controllers/user.controller');
const { validateCreateBookings } = require('../validators/auth');
const runValidation = require('../validators');
const { isLoggedOut, verifyToken, isLoggedIn } = require('../middlewares/auth');
const bookingRouter = express.Router();


// POST /api/users/register
bookingRouter.post(
    '/bookings',
    validateCreateBookings, 
    runValidation,
    handleCreateBookings
);


// Put /api/users/bookings-update/id
bookingRouter.get(
    '/bookings/:userId',
    handleGetBookings

)


// Put /api/users/bookings-update/id
bookingRouter.put(
    '/booking-update/:id',
    handleUpdateBooking
);


// delete /api/users/bookings/:id
bookingRouter.delete(
    '/booking/:id',
    handleDeleteBookings
);





module.exports = bookingRouter;


