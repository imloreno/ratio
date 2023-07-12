import { ICustomizable } from "@interfaces/default";
import style from "./formContainer.module.css"

interface IForm extends ICustomizable {
  children: React.ReactNode;
}

const FormContainer = (props: IForm) => {
  const { children, className = "", styles={} } = props
  
  return (
    <form className={`${className} ${style.formContainer}`} style={styles}>
      {children}
    </form>
  )
}

export default FormContainer