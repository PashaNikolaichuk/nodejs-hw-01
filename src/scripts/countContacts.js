import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const constantsAll = await readContacts();
  return constantsAll.length;
};

console.log(await countContacts());
