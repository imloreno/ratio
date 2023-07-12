import React from "react";
import style from "./styles.module.css";
import { ICustomizable } from "@interfaces/default";
import { IRoute } from "@interfaces/routes";
import { Link } from "react-router-dom";

interface Props extends ICustomizable {
  children: React.ReactNode;
}

interface FrameboxSubMenu {
  routes: IRoute[]
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

const FrameboxSubMenu = (props: FrameboxSubMenu) => {
  const {routes} = props
  return (<div>
    {
      routes.length > 0 ?? routes.map(route => (
        <Link key={route.key}to={route.path}>{route.label}</Link>
      )) 
    }
  </div>)
}

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
  SubMenu: React.memo(FrameboxSubMenu)
});

export default FrameBox;
