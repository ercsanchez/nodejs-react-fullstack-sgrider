const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// get model out of mongoose
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id); // user.id refers to mongodb user's record/document _id
  // we are telling passport to use the mongodb user instance id to generate the token that will be stored in a cookie
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      const foundUser = User.findOne({ googleId: profile.id }).then(
        (existingUser) => {
          if (existingUser) {
            // user already has a record in mongodb
            console.log('user already exists!!!');
            done(null, existingUser);
          } else {
            // save user's google profile id in mongodb
            new User({ googleId: profile.id }).save().then((user) => {
              done(null, user);
            });
          }
        }
      );
    }
  )
);
