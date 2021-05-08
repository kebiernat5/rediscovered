const exjwt = require("express-jwt");

// Init the express-jwt middleware
const isAuthenticated = exjwt({
  secret: process.env.SERVER_SECRET,
});
// add SERVER_SECRET as an environment variable in heroku, ex. = 3928538756342875632857623986

module.exports = isAuthenticated;
