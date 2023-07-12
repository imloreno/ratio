import React from "react";
import ItemList from "@components/ItemList";
import Title from "@components/Title";
import styles from "./styles.module.css";
import SelectV1 from "@components/Form/SelectV1";

const SubjectItemList = () => {
  return (
    <ul className={styles.container}>
      <header className={styles.header}>
        <Title type="header" className={styles.title}>
          Gestión 2023
        </Title>
        <div className={styles.divider} />
      </header>
      <ItemList>
        <Title type="header">Ciencias naturales</Title>
        <div className={styles.optionContainer}>
          <SelectV1 />
        </div>
      </ItemList>
      <ItemList>
        <Title type="header">Ciencias naturales</Title>
        <div className={styles.optionContainer}>
          <SelectV1 />
        </div>
      </ItemList>
      <ItemList>
        <Title type="header">Ciencias naturales</Title>
        <div className={styles.optionContainer}>
          <SelectV1 />
        </div>
      </ItemList>
      <ItemList>
        <Title type="header">Ciencias naturales</Title>
        <div className={styles.optionContainer}>
          <SelectV1 />
        </div>
      </ItemList>
    </ul>
  );
};

export default SubjectItemList;
