import { ICustomizable } from "@interfaces/default";
import style from "./picture.module.css";

interface IPictureProps extends ICustomizable {}

const Picture = (props: IPictureProps) => {
  const { className = "" } = props;
  return (
    <div className={`${style.frame} ${className}`}>
      <img
        src="https://i.pinimg.com/564x/6c/ab/02/6cab029c190895331c3d17033a87efda.jpg"
        alt="pic1"
      />
    </div>
  );
};

export default Picture;
