import React from "react";
import style from "./styles.module.css";
import { ICustomizable } from "@interfaces/default";

interface Props extends ICustomizable {
  children: React.ReactNode;
}

const FrameBoxHeader = ({ children, styles, className = "" }: Props) => {
  return (
    <div
      className={`${style.frameBoxHeader} ${className}`}
      style={styles ? styles : {}}
    >
      {children}
    </div>
  );
};

const Content = ({ children, styles, className = "" }: Props) => {
  return (
    <div
      className={`${style.frameConent} ${className} scroll-bar`}
      style={styles ? styles : {}}
    >
      {children}
    </div>
  );
};

const FrameBoxContainer = ({ children, styles, className = "" }: Props) => {
  return (
    <div
      className={`${style.frameBoxContainer} ${className}`}
      style={styles ? styles : {}}
    >
      {children}
    </div>
  );
};

const FrameBox = Object.assign(React.memo(FrameBoxContainer), {
  Header: React.memo(FrameBoxHeader),
  Body: React.memo(Content),
});

export default FrameBox;
