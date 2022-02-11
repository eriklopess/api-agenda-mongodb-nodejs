const contactsModel = require("../models/contactsModel");
const { getContactsFromDB } = require("../utils/getContactsFromDB");

// Cria um controller para a rota / get
exports.getContacts = async ({params}, res) => {
  try {
    const data = await getContactsFromDB(params)
    res.json(data)
  } catch (err) {
    console.log(err)
    res.status(404).send()
  }
};

// Cria um controller para a rota / post
exports.saveContact = async (req, res) => {
  const { name, email, phone} = req.body.contact;
  try {
    await contactsModel.create({
      name,
      email,
      phone,
    });
    res.status(200).send();
  } catch (err) {
    console.log(err)
    res.status(404).send();
  }
};

// Cria um controller para a rota / delete
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.body;
    const contact = await contactsModel.findOneAndDelete({ _id: id });
    if (!contact) res.status(404).send({ message: "Contato não encontrada" });
    res.status(200).send();
  } catch (err) {
    console.log(err)
    res.status(404).send();
  }
};

// Cria um controller para a rota / patch
exports.editContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body.contact;
    const { id } = req.params;
    await contactsModel.findByIdAndUpdate(id, { name, email, phone });
    res.status(200).send();
  } catch (err) {
    console.log(err)
    res.status(404).send();
  }
}
