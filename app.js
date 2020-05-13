const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const weatherRoutes = require('./routes/cityweather');


const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', weatherRoutes);
app.use('/submit', weatherRoutes);





module.exports = app;
