import React from "react";
import style from "./styles.module.css";

import { ICustomizable } from "@interfaces/default";

interface Props extends ICustomizable {
  children: React.ReactNode;
}

const Pagecontent = ({ children, styles, className = "" }: Props) => {
  return (
    <section className={`${style.pageContent} ${className}}`} style={styles}>
      {children}
    </section>
  );
};

export default Pagecontent;
