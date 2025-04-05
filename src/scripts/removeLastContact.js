import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const constants = await readContacts();
  //   метод pop видаляє останній
  constants.pop();
  await writeContacts(constants);
};

removeLastContact();
