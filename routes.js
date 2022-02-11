const express = require('express');
const { getContacts, saveContact, deleteContact, editContact } = require('./controllers/api');
const route = express.Router();

route.get('/:id?', getContacts);
route.post('/', saveContact);
route.delete('/', deleteContact);
route.patch('/:id', editContact);

module.exports = route;