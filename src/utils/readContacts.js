import { PATH_DB } from '../constants/contacts.js';
// дає нам можливості працювати із файлами та папками.
import fs from 'node:fs/promises';

export const readContacts = async () => {
  // читає вміст файлу за вказаним шляхом. 'utf-8' читає файл як рядок
  const data = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(data); // перетворює текст у масив або об'єкт.
};

readContacts();
