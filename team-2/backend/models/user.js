const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true },
  person: { type: Boolean, required: true },
  business: { type: Boolean, required: true },
  admin: { type: Boolean, required: false }
});

module.exports = mongoose.model('User', postSchema);

