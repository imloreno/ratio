import { ItemList, TextOneLine, Title } from "@components/index";
import styles from "./styles.module.css";

const TaskItem = () => {
  return (
    <ItemList className={styles.itemContainer}>
      <div>
        <TextOneLine type="header">
          <Title type="header" className={styles.title}>
            La tabla periodica
          </Title>
        </TextOneLine>
        <TextOneLine type="normal">
          Lonsectetur adipisicing elit. Modi quasi itaque atque in eveniet
          facere facilis sed quo, reiciendis id?
        </TextOneLine>
      </div>
      <div className={styles.metadataContainer}>
        <p className={styles.dueDate}>12/03/2014</p>
        <TextOneLine type="small" className={styles.subject}>
          Ciencias de la vida
        </TextOneLine>
      </div>
    </ItemList>
  );
};

export default TaskItem;
