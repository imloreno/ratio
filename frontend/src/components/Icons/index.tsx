import { BiHome, BiCategoryAlt, BiBell, BiArrowFromLeft } from "react-icons/bi";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { TbShieldLock } from "react-icons/tb";
import { RiUser3Line } from "react-icons/ri";
import { TbPhotoPlus } from "react-icons/tb";

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
    lock: <TbShieldLock className={className} />,
    user: <RiUser3Line className={className} />,
    arrowLeft: <BiArrowFromLeft className={className} />,
    addPicture: <TbPhotoPlus className={className} />,
  };

  return iconPack[value] || <BiHome className={className} />;
};

export default Icons;
