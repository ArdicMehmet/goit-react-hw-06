import React from "react";
import { useState } from "react";
import styles from "./searchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const currentFilter = useSelector((state) => state.filters.filter);
  const [searchTerm, setSearchTerm] = useState(currentFilter || "");
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
