import React from "react";
import { NavLink } from "react-router-dom";
import Icons from "@components/Icons";
import style from "./subMenu.module.css";

interface ISubMenuProps {
  children: React.ReactNode;
}

interface IOptionProps {
  children: React.ReactNode;
  link: string;
  icon?: string;
}

const Option = (props: IOptionProps) => {
  const { icon, children, link } = props;

  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }: any) =>
          isActive
            ? `${style.menuItemContainer} ${style.linkActive}`
            : `${style.menuItemContainer}`
        }
      >
        {icon && <Icons value={icon} />}
        <b>{children}</b>
      </NavLink>
    </li>
  );
};

const Container = (props: ISubMenuProps) => {
  const { children } = props;

  return (
    <nav className={style.container}>
      <ul className={style.menuList}>{children}</ul>
    </nav>
  );
};

const SubMenu = Object.assign(Container, {
  Option,
});

export default SubMenu;
