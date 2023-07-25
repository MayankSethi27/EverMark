require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride=require('method-override');
const session = require('express-session');
const path = require('path');
const connectDB = require('./config/db');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const app = express();
const port = 8008 || process.env.PORT;

//connected to DataBase
connectDB();

app.use(session({
  secret: 'blahsomething',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    mongoUrl: process.env.MONGODB_URI
  }),
  cookie:{ maxAge:(3600000)}
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // <-- Corrected the line
app.use(methodOverride("_method"));

app.use(passport.initialize());
app.use(passport.session());

// Static files
app.use(express.static('public'));

// Template engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/dashboard'));
app.use('/', require('./routes/auth'));

app.get('*', function (req, res) {
  res.status(404).send('404 Page Not Found');
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
