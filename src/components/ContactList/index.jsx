import React, { useMemo } from "react";
import Contact from "../Contact";
import styles from "./contactList.module.css";
import { useSelector } from "react-redux";
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters.name);
  const filteredContacts = useMemo(() => {
    return contacts
      ? contacts["items"].filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : [];
  }, [contacts, filter]);
  return (
    <div className={styles.container}>
      {filteredContacts.map((contact, index) => (
        <Contact
          key={index}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
};

export default ContactList;
