import Icons from "@components/Icons";
import buttonStyle from "./buttonV1.module.css";

interface IButton {
  children: React.ReactNode;
  icon?: string;
  type?: "button" | "submit" | "reset" | undefined;
  reverse?: boolean;
}

const ButtonV1 = (props: IButton) => {
  const { children, icon, type, reverse } = props;

  return (
    <button className={`${buttonStyle.button}`} type={type}>
      {icon && !reverse && <Icons value={icon} className={buttonStyle.icon} />}
      {children}
      {icon && reverse && <Icons value={icon} className={buttonStyle.icon} />}
    </button>
  );
};

export default ButtonV1;
