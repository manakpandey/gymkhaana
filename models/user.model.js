const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);