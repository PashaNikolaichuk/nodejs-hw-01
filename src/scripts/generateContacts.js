import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts(); // отримуємо наявні контакти з файлу

  // генеруємо нові фейкові контакти
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  console.log([...contacts, ...newContacts]);
  // передаємо ті що і нові були контакти
  await writeContacts([...contacts, ...newContacts]);
};

generateContacts(5);
