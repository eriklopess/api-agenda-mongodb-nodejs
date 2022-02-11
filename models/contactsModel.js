const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  }
});

const contactsModel = mongoose.model('contacts', contactsSchema);

module.exports = contactsModel;