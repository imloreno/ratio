import { Link, useLocation } from "react-router-dom";
import Form from "@components/Form";
import Title from "@components/Title";
import Pagecontent from "@layouts/PageContent";
import style from "./login.module.css";

interface ILoginText {
  title: string;
  link: {
    text: string;
    linkLabel: string;
    redirect: string;
  };
  button: string;
}

const Login = () => {
  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const lastPath = location.state?.lastPath ?? "";
  const { title, link, button } = textGenerator(path);

  return (
    <Pagecontent>
      <Form className={style.container}>
        <Title type="title" className={`${style.title}`}>
          {title}
        </Title>
        <Form.InputV1
          icon="user"
          type="text"
          placeholder="Usuario"
          autofocus={true}
        />
        <Form.InputV1 icon="lock" type="password" placeholder="Contraseña" />
        <span>
          {link.text}
          <Link to={`/${link.redirect}`} state={{ lastPath: path }}>
            <b className={style.linkRedirect}>{link.linkLabel}</b>
          </Link>
        </span>
        <Form.ButtonV1 type="submit" icon="arrowLeft" reverse>
          <span style={{ marginTop: ".1rem" }}>{button}</span>
        </Form.ButtonV1>
      </Form>
    </Pagecontent>
  );
};

const textGenerator = (path: string): ILoginText => {
  if (path === "login")
    return {
      title: "Iniciar Sesión",
      link: {
        text: "Si no tienes una cuenta ",
        linkLabel: "registrate",
        redirect: "signup",
      },
      button: "INGRESAR",
    };
  return {
    title: "Crear Cuenta",
    link: {
      text: "Si ya tienes una cuenta ",
      linkLabel: "inicia sesión",
      redirect: "login",
    },
    button: "REGISTRARSE",
  };
};

export default Login;
