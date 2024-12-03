import React from "react";
import styles from "./contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <p>name : {name}</p>
        <p>number : {number} </p>
      </div>
      <button className={styles.deleteBtn} onClick={(_) => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
