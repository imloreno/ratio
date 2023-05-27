import React from "react";
import styles from "./styles.module.css";
import { ICustomizable } from "@interfaces/default";

interface Props extends ICustomizable {
  children: React.ReactNode;
  type: "normal" | "header" | "small";
}

//Type selector
const myClass = (myClass: string) => {
  switch (myClass) {
    case "normal":
      return styles.normal;
    case "header":
      return styles.header;
    case "small":
      return styles.small;
    default:
      return styles.normal;
  }
};

const TextOneLine = ({ children, type, className = "" }: Props) => {
  return (
    <div className={`${styles.textContainer} ${className} ${myClass(type)}`}>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default TextOneLine;
