import { ICustomizable } from "@interfaces/default";
import style from "./inputV1.module.css";
import Icons from "@components/Icons";

interface IInputProps extends ICustomizable {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  icon?: string;
}

const InputV1 = (props: IInputProps) => {
  return (
    <div className={style.inputContainer}>
      {props.icon && <Icons value={props.icon} className={style.icon} />}
      <input {...props} className={`${props.className} ${style.input}`} />
    </div>
  );
};

export default InputV1;
