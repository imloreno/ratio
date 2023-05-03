import { BiHome, BiCategoryAlt, BiCaretRight } from "react-icons/bi";

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
    menu: <BiCaretRight className={className} />,
  };

  return iconPack[value] || <BiHome className={className} />;
};

export default Icons;
