require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session=require('express-session');
const path = require('path');
const connectDB=require('./config/db');
const app = express();
const port = 8008 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // <-- Corrected the line

//connected to DataBase
connectDB();

// Static files
app.use(express.static('public'));

// Template engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//route
app.use('/',require('./routes/index'));
app.use('/',require('./routes/dashboard'));

app.get('*',function(req,res){
  res.status(404).send('404 Page Not Found');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
