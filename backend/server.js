//import dependecies
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');

//variabel per porten
const port = process.env.PORT || 5000;

//inicializimi i express.js
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//routes
app.use('/api/tasks', require('./routes/taskRoutes'))
app.use(errorHandler);

//pritesi i requesteve
app.listen(port, () => console.log(`Server is running on port ${port}`))