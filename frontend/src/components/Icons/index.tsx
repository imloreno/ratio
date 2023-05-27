import { BiHome, BiCategoryAlt, BiBell } from "react-icons/bi";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";

type IIcon = {
  [value: string]: JSX.Element;
};
type Props = {
  value: string;
  className?: string;
};

const Icons = ({ value, className = "" }: Props): JSX.Element => {
  const iconPack: IIcon = {
    home: <BiHome className={className} />,
    subjects: <BiCategoryAlt className={className} />,
    menu: <FaArrowRight className={className} />,
    notifications: <BiBell className={className} />,
    arrowRight: <FaChevronRight className={className} />,
  };

  return iconPack[value] || <BiHome className={className} />;
};

export default Icons;
