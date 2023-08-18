import { memo } from "react";
import SelectV2 from "./SelectV2";
import { ICustomizable } from "@interfaces/default";
import style from "./filters.module.css";

interface IFiltersProps extends ICustomizable {
  children: React.ReactNode;
}

const Container = (props: IFiltersProps) => {
  const { children } = props;

  return <div className={style.filterContainer}>{children}</div>;
};

const Filters = Object.assign(Container, {
  SelectV2: memo(SelectV2),
});

export default Filters;
