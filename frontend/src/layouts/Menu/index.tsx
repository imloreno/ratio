import { publicRoutes } from "@router/hooks/useRoutes";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.css";
import logo from "@assets/logo.svg";
import Icons from "@components/Icons";

import useMenu from "./useMenu";

const Menu = () => {
  const { toggle, handleToggle } = useMenu();

  return (
    <nav className={`${styles.menu} ${toggle && styles.menu_toggle}`}>
      <div className={styles.menu__logo}>
        <img src={logo} alt="Ratio" />
        <p>RATIO</p>
      </div>
      <ul className={styles.menu__list}>
        {publicRoutes.map((route, index) => (
          <NavLink
            key={index}
            to={route.path}
            className={({ isActive }) =>
              isActive ? styles.menu__list_active : ""
            }
          >
            <li className={styles.menu__list_menuitem}>
              <Icons value={route.key} className={styles.menu__list_icon} />
              <p>{route.label}</p>
            </li>
          </NavLink>
        ))}
      </ul>
      <div className={styles.menu__icon_container} onClick={handleToggle}>
        <Icons value="menu" className={styles.menu__icon} />
      </div>
    </nav>
  );
};

export default Menu;
