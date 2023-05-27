import React from "react";
import styles from "./styles.module.css";

interface Props {
  children: string;
  className?: string;
  type?: "title" | "subtitle" | "header";
}

const Elements = {
  title: (title: string) => <h1 className={styles.titleText}>{title}</h1>,
  subtitle: (title: string) => <h2 className={styles.subtitleText}>{title}</h2>,
  header: (title: string) => <h3 className={styles.headerText}>{title}</h3>,
};

const Title = ({ children, className = "", type = "title" }: Props) => {
  return (
    <div className={`${styles.titleContainer} ${className}`}>
      {Elements[type] ? Elements[type](children) : Elements["title"](children)}
    </div>
  );
};

export default Title;
