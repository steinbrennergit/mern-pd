const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
// const passport = require("./config/passport");
// const session = require("express-session");
const PORT = process.env.PORT || 3001;

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: Math.random().toString(36).substring(2), resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pokedex");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
