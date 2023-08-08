
const express = require('express');
const { json } = require('body-parser');
const app = express();
const userRouter = require('./routes/userRoutes');
const tourRoute = require('./routes/tourRoutes');
app.use(express.json());



const fun = require('./route-handler/routeFunctions');

//~ ---------------------------- Middleware -----------------------------------------------S
app.use((req,res,next)=>{
    console.log("Middleware");
    next();
});
app.use((req,res,next)=>{
     req.requestTime = new Date().toISOString();
    next();
});
// ^ npm middleware , i.e. morgen 
var morgen = require('morgan'); // Third Party Prints = in console ==> GET /users 404 2.137 ms - 144
app.use(morgen('dev'));


// Mounting a router on Route("/users")
app.use('/users', userRouter);
app.use('/tours', tourRoute);

// * Different Resources : => 1) users , tours, products
//~ ---------------------------- Middleware -----------------------------------------------E


module.exports = app;