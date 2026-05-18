const mongoose = require('mongoose');

const { mongodbUrl } = require('../secret');


// option 1
const connectDatabase = async (options = {}) => {
    try {
        await mongoose.connect(mongodbUrl, options)
        console.log( 'Connection to DB is successfully.');

        mongoose.connection.on('error', (error) => {
            console.log("DB Connection error: ", error);
        })
    } catch (error) {
        console.log('error', 'Cold not connect to DB: ', error.toString());
    };
};



module.exports = connectDatabase;