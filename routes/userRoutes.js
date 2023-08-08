const express = require('express');
const userRouter = express.Router();  
const { getAllUsers, get1User, addUser,editUser,deleteUser } = require('./../controllers/userControllers');


// ^ Route
userRouter.route('/').get(getAllUsers).post(addUser); // * Refactoring of Route :  
userRouter.route('/:id').get(get1User).patch(editUser).delete(deleteUser); // * Refactoring of Route :  

module.exports = userRouter;