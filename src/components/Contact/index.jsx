import React from "react";
import styles from "./contact.module.css";
const Contact = ({ id, name, number, handleDelete }) => {
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
