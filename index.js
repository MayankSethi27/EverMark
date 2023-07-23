require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const app = express();
const port = 8008 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // <-- Corrected the line

// Static files
app.use(express.static('public'));

// Template engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//main route
app.use('/',require('./routes/index'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
