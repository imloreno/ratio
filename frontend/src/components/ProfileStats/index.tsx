import ProfilePicture from "@components/ProfileStats/ProfilePicture";
import DataInformation from "@components/ProfileStats/DataInformation";
import style from "./profileStats.module.css";

interface IProps {
  children: React.ReactNode;
}

const ProfileContainer = (props: IProps) => {
  return <div className={style.profileContainer}>{props.children}</div>;
};

const ProfileStats = Object.assign(ProfileContainer, {
  ProfilePicture,
  DataInformation,
});

export default ProfileStats;
