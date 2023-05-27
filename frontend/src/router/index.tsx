import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useRoutes from "./hooks/useRoutes";
import Menu from "@layouts/Menu";

import temp_img from "@assets/temp-schema.png";

const Router = () => {
  const { routes } = useRoutes();

  // To rmeove later
  const [show, setshow] = React.useState(false);
  const handleShow = () => setshow(!show);

  return (
    <BrowserRouter>
      <div className="body">
        <button
          style={{ position: "fixed", top: 0, left: 0, zIndex: 11 }}
          onClick={handleShow}
        >
          Show
        </button>
        <img
          src={temp_img}
          alt="temp"
          style={{
            position: "fixed",
            width: "100%",
            height: "auto",
            left: 0,
            top: 0,
            opacity: show ? 0.3 : 0,
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
