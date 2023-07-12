import Home from "@pages/Home";
import Login from "@pages/Login";
import styles from "./styles.module.css";

type PageList = {
  [key: string]: JSX.Element;
};

export const Pages = (page: string): JSX.Element => {
  const pages: PageList = {
    home: <Home />,
    subjects: <div>Materias</div>,
    login: <Login/>,
    signup: <Login/>,
  };
  return <main className={styles.main}>{pages[page] || <Home />}</main>;
};
