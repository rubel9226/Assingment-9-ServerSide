const {Schema, model} = require('mongoose');
const { defaultImagePath } = require('../config');



const bookingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [true, 'user is required.'],
    },
    userEmail: {
        type: String,
        required: [true, 'Doctor email name is required'],
        trim: true,
        lowercase: true,
        validate: {
            validator:  (v) => {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: 'Please enter a valid email',
        }
    },
    doctorName: {
        type: String,
        required: [true, 'Doctor name is required'],
        trim: true,
        minlength: [3, 'Doctor name can be minimum 3 characters'],
        maxlength: [31, 'Doctor name can be maximum 31 characters'],
    },
    patientName: {
        type: String,
        default: 'male'
    },
    gender: {
        type: String,
        required: [true, 'User gender is required'],
        trim: true,
        minlength: [3, 'User gender can be minimum 3 characters'],
        maxlength: [31, 'User gender can be maximum 31 characters'],
    },
    phone: {
        type: Number, 
        required: [true, 'Phone is required']
    },
    date: {
        type: String
    },
    time:{
        type: String
    },
    reason: {
        type: String
    }

}, {timestamps: true});


const Bookings = model('Bookings', bookingSchema);

module.exports = Bookings;