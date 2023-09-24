import * as contactsService from "./contacts.js";
import yargs from "yargs";

import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;

const invokeAction = async ({ action, id, name, phone, email }) => {
  try {
    switch (action) {
      case "list":
        const contactsList = await contactsService.listContacts();
        return console.log(contactsList);
      case "get":
        const oneContact = await contactsService.getContactById(id);
        return console.log(oneContact);
      case "add":
        const newContact = await contactsService.addContact({
          name,
          phone,
          email,
        });
        return console.log(newContact);

      case "remove":
        const deleteContact = await contactsService.deleteContact(id);
        return console.log(deleteContact);

      default:
        console.log("Unknown action");
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
invokeAction(argv);
