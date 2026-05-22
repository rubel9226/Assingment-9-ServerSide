const createHttpError = require("http-errors");
const { doctors } = require("../data");
const Doctor = require("../models/doctors.model");
const { successResponse } = require("./response.controller");

const seedDoctors = async (req, res, next) => {
    try {
        
        // deleting all existing users
        await Doctor.deleteMany({});

         // inserting new users
         const users = await Doctor.insertMany(doctors);

         // successful response
         return res.status(201).json(users);

    } catch (error) {
        next(error)
    }
};


const getAllDoctors = async (req, res, next) => {
    try {
        const { search } = req.query;
        let doctors;
        if (search) {
            doctors = await Doctor.find({
                $or: [
                    { 
                        name: { $regex: search, $options: "i" }
                    },
                    { 
                        specialty: { $regex: search, $options: "i" }
                    }
                ]
            });
        } else {
            doctors = await Doctor.find({});
        }

        return successResponse(res, {
            statusCode: 200,
            message: "Doctors returned successfully.",
            payload: doctors
        });

    } catch (error) {
        next(error);
    }
};


const getSingleDoctor = async (req, res, next) => {
    try {
        console.log(req.user, 'user');
        const id = req.params.id;
        
        const doctor =await Doctor.findOne({id});
        
        
        if(!doctor){
            throw createHttpError(404, 'doctor not found.');
        }

        return successResponse(res, {
            statusCode: 200,
            message: "doctors return successfully.",
            payload: doctor
        });
    } catch (error) {
        next(error)
    }
};

module.exports = { seedDoctors, getAllDoctors, getSingleDoctor }