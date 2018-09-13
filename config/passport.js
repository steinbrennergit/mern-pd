const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// requires the model with Passport-Local Mongoose plugged in
const User = require('../models/user');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;