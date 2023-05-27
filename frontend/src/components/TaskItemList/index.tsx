import React from "react";
import { TaskItem } from "@components";
import styles from "./styles.module.css";

const TaskItemList = () => {
  return (
    <ul className={styles.container}>
      <TaskItem />
    </ul>
  );
};

export default TaskItemList;
