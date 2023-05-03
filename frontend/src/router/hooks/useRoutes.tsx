import { useState } from "react";

import { Pages } from "@pages/index";

import { IRoute } from "@interfaces/routes";

export const publicRoutes: IRoute[] = [
  {
    key: "home",
    label: "Inicio",
    path: "/",
  },
  {
    key: "subjects",
    label: "Materias",
    path: "/materias",
  },
];

const useRoutes = () => {
  const [routes, setRoutes] = useState(
    publicRoutes.map((route) => ({
      path: route.path,
      element: Pages(route.key),
    }))
  );
  return { routes };
};

export default useRoutes;
