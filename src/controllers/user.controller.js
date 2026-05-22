
const createError = require('http-errors');
const bcrypt = require('bcryptjs');


const { successResponse } = require("./response.controller");
const { createJSONWebToken } = require('../helper/jsonwebtoken');
const { setAccessTokenCookie } = require('../helper/cookie');
const { jwtAccessKey } = require('../secret');
const Bookings = require('../models/booking.model');

const handleCreateBookings = async (req, res, next) => {
    try {
        
        const { user, userEmail, doctorName, patientName, gender, phone, date, time, reason } = req.body;
        
        const data = {
            user,
            userEmail, 
            doctorName, 
            patientName, 
            gender, 
            phone, 
            date, 
            time, 
            reason
        }

        
        
        // create booking
        const newBooking = await Bookings.create(data);
        console.log(newBooking);

        return successResponse(res, {
            statusCode: 200,
            message: "Bookings create successfully.",
            payload: newBooking
        });

    } catch (error) {
        next(error);
    }
};



const handleGetBookings = async (req, res, next) => {
    try {
        
        const userId = req.params.userId;

        console.log(userId);

        const bookings =await Bookings.find({user: userId});
        


        return successResponse(res, {
            statusCode: 200,
            message: "Bookings returned successfully.",
            payload: bookings
        });

    } catch (error) {
        next(error);
    }
};



const handleUpdateBooking = async (req, res, next) => {
    try {
        
        const { doctorName, patientName, date, time, reason } = req.body;
        const id = req.params.id;



        // console.log(data, 'data');
        console.log(id);

        const updateData = {
            doctorName, 
            patientName,
            date,
            time,
        };

        if(reason){
            updateData.reason = reason;
        }

        console.log(updateData);

        // update booking
        const newBooking = await Bookings.findByIdAndUpdate(
            {_id: id},
            updateData,
            {new: true}
        );

        return successResponse(res, {
            statusCode: 200,
            message: "Booking update successfully.",
            payload: newBooking
        });

    } catch (error) {
        next(error);
    }
};



const handleDeleteBookings = async (req, res, next) => {
    try {
        
        const id = req.params.id;
        const booking =await Bookings.findOne({_id: id});
        console.log(booking, 'booking');
        if(!booking){
            throw createError(404, 'booking not found.');
        };        

        // update booking
        const newBooking = await Bookings.findByIdAndDelete({_id: id});
        if(!newBooking){
            throw createError(400, 'booking not delete.')
        }

        return successResponse(res, {
            statusCode: 200,
            message: "Booking delete successfully.",
            payload: newBooking
        });

    } catch (error) {
        next(error);
    }
};




module.exports = { 
    handleCreateBookings, 
    handleGetBookings,
    handleUpdateBooking,
    handleDeleteBookings
}
