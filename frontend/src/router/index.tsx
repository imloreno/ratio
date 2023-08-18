import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Menu } from "@layouts/index";
import { IRoute } from "@interfaces/routes";
import { ROUTES, SUB_ROUTES } from "@constants/index";
import { routeList } from "./routeList";
import { Home, Subjects, Login } from "@pages/index";
import { SubjectDescription, Students } from "@features/index";
import style from "./styles.module.css";

type PageList = {
  [key: string]: JSX.Element;
};

const Router = () => (
  <BrowserRouter>
    <div className="body">
      <Menu publicRoutes={routeList || []} />
      <Routes>
        {routeList?.length > 0 &&
          routeList.map((route: IRoute, index: number) => (
            <Route
              key={index}
              path={route.path}
              element={<Page page={route.key} />}
            >
              {route?.subRoutes &&
                route.subRoutes.map((subRoute: IRoute) => {
                  return (
                    <Route
                      key={subRoute.key}
                      path={subRoute.path}
                      element={<SubPage page={subRoute.key} />}
                    />
                  );
                })}
            </Route>
          ))}
      </Routes>
    </div>
  </BrowserRouter>
);

// Page list builder
const Page = (props: { page: string }): JSX.Element => {
  const pages: PageList = {
    [ROUTES.HOME]: <Home />,
    [ROUTES.SUBJECTS]: <Subjects />,
    [ROUTES.LOGIN]: <Login />,
    [ROUTES.SIGNUP]: <Login />,
    [ROUTES.REDIRECT]: <Navigate to="/" />,
  };
  return <main className={style.main}>{pages[props.page] || <Home />}</main>;
};

// SubPage list builder
const SubPage = (props: { page: string }): JSX.Element => {
  const pages: PageList = {
    [SUB_ROUTES.SUBJECT_DESCRIPTION]: <SubjectDescription />,
    [SUB_ROUTES.SUBJECT_DETAILS]: <Students />,
  };
  return pages[props.page] || <Home />;
};

export default Router;
