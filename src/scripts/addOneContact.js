import {readContacts} from "../utils/readContacts.js";
import {createFakeContacts} from "../utils/createFakeContact.js";
import {writeContacts} from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const contactList = await readContacts();
    const contact = createFakeContacts();
    await writeContacts([...contactList, contact]);
};

addOneContact();
