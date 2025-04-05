import { PATH_DB } from '../constants/contacts.js';
// дає нам можливості працювати із файлами та папками.
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  //writeFile повінстю видаляє зміст файлу і записує новий || JSON.stringify перетворює на строку
  await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
};
