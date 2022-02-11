const contactsModel = require("../models/contactsModel");

exports.getContactsFromDB = async ({ id }) => {
  let contacts;
  if (!id) {
    contacts = await contactsModel.find();
  } else {
    contacts = await contactsModel.findById(id);
  }
  return contacts;
};
