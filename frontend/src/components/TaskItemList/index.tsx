import { TaskItem } from "@components/index";
import styles from "./styles.module.css";

const TaskItemList = () => {
  return (
    <ul className={styles.container}>
      <TaskItem />
      <TaskItem />
    </ul>
  );
};

export default TaskItemList;
