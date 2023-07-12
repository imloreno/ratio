import { ICustomizable } from "@interfaces/default";
import style from "./styles.module.css";

interface Props extends ICustomizable{
  children: string;
  type?: "title" | "subtitle" | "header";
}

const Elements = {
  title: (title: string) => <h1 className={style.titleText}>{title}</h1>,
  subtitle: (title: string) => <h2 className={style.subtitleText}>{title}</h2>,
  header: (title: string) => <h3 className={style.headerText}>{title}</h3>,
};

const Title = ({ children, className = "", type = "title", styles={} }: Props) => {
  return (
    <div className={`${style.titleContainer} ${className}`} style={styles}>
      {Elements[type] ? Elements[type](children) : Elements["title"](children)}
    </div>
  );
};

export default Title;
