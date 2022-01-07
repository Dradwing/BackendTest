const mongoose = require("mongoose");
const validator = require("validator"); //only for strings
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "A user must have name"] },

  email: {
    validate: [validator.isEmail, "Please provide a valid Email"],
  },

  password: {
    required: [true, "password tho daal"],
    maxlength: 25,
    minlength: 4,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
