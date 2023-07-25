const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        profileImage: profile.photos[0].value,
      };

      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          done(null, user);
        } else {
          user = await User.create(newUser);
          done(null, user);
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);

// Google Login Route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// Retrieve user data
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login-failure",
    successRedirect: "/dashboard",
  })
);

// Route if something goes wrong
router.get('/login-failure', (req, res) => {
  res.send('Something went wrong...');
});

// Destroy user session OR logout
router.get('/logout', (req, res) => {
  req.session.destroy(error => {
    if(error) {
      console.log(error);
      res.send('Error loggin out');
    } else {
      res.redirect('/')
    }
  })
});


// Presist user data after successful authentication
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Retrieve user data from session.
passport.deserializeUser(function(id, done) {
    User.findById(id)
      .then((user) => {
        if (user) {
          console.log('User found');
          done(null, user);
        } else {
          console.log('User not found');
          done(null, null); // Pass null as the user object when user is not found
        }
      })
      .catch((err) => {
        console.error('Error in finding user:', err);
        done(err, null); // Pass the error as the first argument when there's an error
      });
  });
  




module.exports = router;