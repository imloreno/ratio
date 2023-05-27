import React from "react";
import style from "./styles.module.css";
import Icons from "@components/Icons";
import { ICustomizable } from "@interfaces/default";

interface Props extends ICustomizable {
  children?: React.ReactNode;
}

const ItemList = ({ children, className = "" }: Props) => {
  return (
    <li className={style.itemList}>
      <div className={`${style.itemListContent} ${className}`}>{children}</div>
      <div className={style.itemListLink}>
        <Icons value="arrowRight" className="icon" />
      </div>
    </li>
  );
};

export default ItemList;
