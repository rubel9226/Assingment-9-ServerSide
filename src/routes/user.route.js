const express = require('express');
const { handleGetUsers } = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/', handleGetUsers)



module.exports = userRouter;


