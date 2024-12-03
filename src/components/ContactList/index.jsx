import React, { useMemo } from "react";
import Contact from "../Contact";
import styles from "./contactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
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
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={styles.container}>
      {filteredContacts.map((contact, index) => (
        <Contact
          key={index}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          handleDelete={(_) => handleDelete(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
