//IMPORTS
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');


//IMPORT ROUTES
const mentorRoutes = require('./routes/mentor')

//SETTING UP EXPRESS APP
const app = express();

//SETTING UP THE DATABASE
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() =>  console.log('Database is Connected!'));

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

//ROUTES MIDDLEWARE
app.use('/api',mentorRoutes);

//SETTING UP THE PORT
const port = process.env.PORT || 4000;

//LISTENING ON PORT AND RUNNING THE SERVER
app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
})