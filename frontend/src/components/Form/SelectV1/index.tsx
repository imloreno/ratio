import React, { useState } from "react";
import Icons from "@components/Icons";
import styles from "./styles.module.css";

const SelectV1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: number) => {
    console.log(e);
  };

  return (
    <div
      className={`${styles.selectContainer} ${isOpen && styles.isActive}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="text">3º Trimestre</span>
      <div className={styles.iconContainer}>
        <Icons value="arrowRight" className="arrow"></Icons>
      </div>
      <ul className={styles.listSelect}>
        <li onClick={() => handleClick(10)}>Value</li>
        <li onClick={() => handleClick(2)}>Value</li>
        <li onClick={() => handleClick(20)}>Value</li>
      </ul>
    </div>
  );
};

export default SelectV1;
