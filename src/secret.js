require('dotenv').config();

const port = process.env.PORT || 8080;

const mongodbUrl = process.env.MONGODB_ATLAS_URL || 'http://localhost:27017/assignment8' ;
const clintURL = process.env.CLIENT_URL || 'http://localhost:3000';
const jwtAccessKey = process.env.JWT_ACCESS_KEY || 'tumikeamikerajakarrajakar';

module.exports = {
    port, 
    mongodbUrl,
    clintURL, 
    jwtAccessKey
}