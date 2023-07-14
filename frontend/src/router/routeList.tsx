import { IRoute } from "@interfaces/routes";
import { ROUTES, SUB_ROUTES } from "@constants/index";

export const routeList: IRoute[] = [
  {
    key: "inicio",
    label: "Inicio",
    path: "/",
  },
  {
    key: ROUTES.SUBJECTS,
    label: "Materias",
    path: "/" + ROUTES.SUBJECTS,
    subRoutes: [
      {
        key: SUB_ROUTES.SUBJECT_DESCRIPTION,
        label: "Description",
        path: SUB_ROUTES.SUBJECT_DESCRIPTION,
      },
      {
        key: SUB_ROUTES.SUBJECT_DETAILS,
        label: "Materias",
        path: SUB_ROUTES.SUBJECT_DETAILS,
      },
    ],
  },
  {
    key: ROUTES.LOGIN,
    label: "Login",
    path: "/" + ROUTES.LOGIN,
    hidden: true,
  },
  {
    key: ROUTES.SIGNUP,
    label: "Signup",
    path: "/" + ROUTES.LOGIN,
    hidden: true,
  },
  {
    key: ROUTES.REDIRECT,
    label: "Redirect",
    path: "/*",
    hidden: true,
  },
];

export default routeList;
