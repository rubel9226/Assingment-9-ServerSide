const {Schema, model} = require('mongoose');
const { defaultImagePath } = require('../config');



const doctorsSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },

    name: {
        type: String,
        required: true,
    },

    specialty: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    experience: {
        type: String,
        required: true,
    },

    availability: {
        type: [String],
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    hospital: {
        type: String,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    fee: {
        type: Number,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
    },
}, {timestamps: true});


const Doctor = model('doctors', doctorsSchema);

module.exports = Doctor;