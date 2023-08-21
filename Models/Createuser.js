const mongoose = require('mongoose');

const CreateuserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Createuser', CreateuserSchema);
