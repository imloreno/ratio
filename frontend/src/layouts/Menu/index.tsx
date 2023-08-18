import { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.css";
import logo from "@assets/logo.svg";
import Icons from "@components/Icons";

import useMenu from "./useMenu";
import { IRoute } from "@interfaces/routes";

const Menu = (props: any) => {
  const { toggle, handleToggle } = useMenu();
  const { publicRoutes } = props;

  return (
    <nav className={`${styles.menu} ${toggle && styles.menu_toggle}`}>
      <div className={styles.menu__logo}>
        <img src={logo} alt="Ratio" />
        <p>RATIO</p>
      </div>
      <ul className={styles.menu__list}>
        {publicRoutes?.length > 0 &&
          publicRoutes
            .filter((route: IRoute) => !route?.hidden)
            .map((route: IRoute, index: number) => {
              return (
                <NavLink
                  key={index}
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? styles.menu__list_active : ""
                  }
                >
                  <li className={styles.menu__list_menuitem}>
                    <Icons
                      value={route.key.toLowerCase()}
                      className={styles.menu__list_icon}
                    />
                    <p>{route.label}</p>
                  </li>
                </NavLink>
              );
            })}
      </ul>
      <div className={styles.menu__icon_container} onClick={handleToggle}>
        <Icons value="menu" className={styles.menu__icon} />
      </div>
    </nav>
  );
};

export default memo(Menu);
