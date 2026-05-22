const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');



const { clintURL } = require('./secret');
const { errorResponse } = require('./controllers/response.controller');






app.use(cors({
    origin: clintURL,
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cookieParser());


// user route
const bookingRouter = require('./routes/booking.route');
app.use('/api/users', bookingRouter);

// doctor route
const doctorsRouter = require('./routes/doctors.route');
app.use('/api/doctors', doctorsRouter);


// client error handling
app.use((req, res, next) => {
    next(createError(404, 'route not found.'))
});

// client error handling --> all the errors
app.use((err, req, res, next) => {
    return errorResponse(res, {
        statusCode: err.status,
        message: err.message
    })
})


module.exports = app;