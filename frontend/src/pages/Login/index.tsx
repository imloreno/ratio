import Form from "@components/Form"
import Title from "@components/Title"
import Pagecontent from "@layouts/PageContent"
import { Link } from "react-router-dom"
import style from "./login.module.css"



const Login = () => {
  return (
    <Pagecontent>
      <Form styles={{margin: "auto"}}  className={style.container}>
        <Title type="title" className={`${style.title}`}>Iniciar Sesión</Title>
        <Form.InputV1 icon="user" type="text" placeholder="Usuario" />
        <Form.InputV1 icon="lock" type="password" placeholder="Contraseña" />
        <Link to={"/signup"}>Crear una cuenta</Link>
        <Form.ButtonV1 type="submit" icon="arrowLeft" reverse>
          <span style={{marginTop: ".1rem"}}>INGRESAR</span>
        </Form.ButtonV1>
      </Form>
    </Pagecontent>
  );
};

export default Login;
