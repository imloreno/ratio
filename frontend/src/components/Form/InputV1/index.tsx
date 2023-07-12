import { ICustomizable } from "@interfaces/default";
import style from "./inputV1.module.css";
import Icons from "@components/Icons";

interface IInputProps extends ICustomizable {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  icon?: string;
  autofocus?: boolean;
}

const InputV1 = (props: IInputProps) => {
  const { className, value, icon } = props;
  return (
    <div className={style.inputContainer}>
      {icon && <Icons value={icon} className={style.icon} />}
      <input {...props} className={`${className} ${style.input}`} autoFocus={props.autofocus}/>
    </div>
  );
};

export default InputV1;
