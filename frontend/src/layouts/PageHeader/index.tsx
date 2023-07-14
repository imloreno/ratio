import Title from "@components/Title";
import styles from "./styles.module.css";
import Icons from "@components/Icons";

interface Props {
  title: string;
  path?: string;
}

const PageHeader = ({ title }: Props) => {
  return (
    <header className={styles.pageHeader}>
      <Title>{title}</Title>
      <div className={`${styles.iconContainer} active`}>
        <Icons value="notifications" />
      </div>
    </header>
  );
};

export default PageHeader;
