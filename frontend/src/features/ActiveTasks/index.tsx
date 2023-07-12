import { TaskItemList } from "@components/index";
import styles from "./styles.module.css";

const ActiveTasks = () => {
  return (
    <section className={styles.subjectBlock}>
      <TaskItemList />
    </section>
  );
};

export default ActiveTasks;
