import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const constantsList = await readContacts();
  const newContacts = createFakeContact();
  //   всі що були, додаємо нову і перезаписуємо
  writeContacts([...constantsList, newContacts]);
};

addOneContact();
