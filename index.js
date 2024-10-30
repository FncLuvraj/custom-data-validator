// index.js
const { Validator, autoTrim, normalizeEmail } = require("./lib/validator");

// Ensure that `validatePassword` is available as a direct function as well
const validatePassword = Validator.prototype.validatePassword;

module.exports = {
  Validator,         // Export the Validator class
  autoTrim,          // Utility function
  normalizeEmail,    // Utility function
  validatePassword,  // Export the password validation function directly
  // other validation functions if any...
};