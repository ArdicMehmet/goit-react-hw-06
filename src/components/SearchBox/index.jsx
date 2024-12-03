import React from "react";
import { useState } from "react";
import styles from "./searchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setSearchTerm(value);
    dispatch(changeFilter(value));
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.info}>Find contacts by name</h4>
      <input
        className={styles.inputText}
        type="text"
        value={searchTerm}
        onChange={(event) => handleChange(event.currentTarget.value)}
      />
    </div>
  );
};

export default SearchBox;
