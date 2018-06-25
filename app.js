const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const usersRoutes = require('./routes/users');

//set up password in nodemon.json
//mongodb atlas
// mongoose.connect('mongodb+srv://zhouyou0528:' + process.env.MONGO_ATLAS_PW + '@my-fb-web-app-nki7b.mongodb.net/test');
//mlab
mongoose.connect('mongodb://' + process.env.MLAB_USERNAME + ':' + process.env.MLAB_PW + '@ds217131.mlab.com:17131/mean-stack-web-app');

// generate log
app.use(morgan('dev'));

app.use('/uploads', express.static('uploads'));

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors middleware
app.use(cors());

//Set static Folder
app.use(express.static(path.join(__dirname, './frontend/dist/MyNewFBWebApp')));



app.use('/users', usersRoutes);
app.all("*",(req,res,next) => {
    res.sendFile(path.resolve('./frontend/dist/MyNewFBWebApp/index.html'))
});

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// app.all("*",(req,res,next) => {
//     res.sendFile(path.resolve('../frontend/dist/MyNewFBWebApp/index.html'))
// });

module.exports = app;