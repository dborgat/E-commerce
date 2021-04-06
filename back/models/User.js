const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    // required: true,
    min: 4,
    max: 120,
  },
  lastname: {
    type: String,
    // required: true,
    max: 120,
    min: 4,
  },
  age: {
    type: Number,
    // required: true,
    max: 150,
    min: 18,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  email: {
    type: String,
    unique: true,
    minlength: 6,
    maxlength: 50,
    // required: true,
    validate: [isEmail, "invalid email"],
  },
  password: {
    type: String,
    trim: true,
    // required: true,
  },
  purchase: [
    {
      type: Schema.Types.ObjectId,
      ref: "purchase",
    },
  ],
  salt: {
    type: String,
  },
  address: {
    type: String,
  },
  favorites: {
    type: Array,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
      next();
    });
});

userSchema.methods.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};

module.exports = mongoose.model("user", userSchema);
