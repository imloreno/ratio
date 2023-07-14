import styles from "./styles.module.css";
import { SubjectItemList } from "@components/index";

const SubjectBlock = () => {
  return (
    <section className={styles.subjectBlock}>
      <SubjectItemList />
      <SubjectItemList />
    </section>
  );
};

export default SubjectBlock;
