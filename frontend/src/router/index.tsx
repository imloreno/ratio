import { BrowserRouter, Routes, Route } from "react-router-dom";

import useRoutes from "./hooks/useRoutes";
import Menu from "./Menu";

import temp_img from "@assets/temp-schema.png";

const Router = () => {
  const { routes } = useRoutes();

  return (
    <BrowserRouter>
      <div className="body">
        <img
          src={temp_img}
          alt="temp"
          style={{
            position: "fixed",
            width: "100%",
            height: "auto_",
            left: 0,
            top: 0,
            opacity: 0.1,
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <Menu />
        <Routes>
          {routes.length &&
            routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
