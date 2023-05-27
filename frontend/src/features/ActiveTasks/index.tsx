import React from "react";
import { TaskItemList } from "@components";
import styles from "./styles.module.css";

const ActiveTasks = () => {
  return (
    <section className={styles.subjectBlock}>
      <TaskItemList />
    </section>
  );
};

export default ActiveTasks;
