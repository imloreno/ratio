import style from "./profilePicture.module.css";

const ProfilePicture = () => {
  return (
    <div className={style.profilePictureContainer}>
      <div className={style.profilePicture}>
        <img
          src="https://avatars.githubusercontent.com/u/81207689?s=400&u=80bdbee523a7240bfa844220e062d2fa1bafbe61&v=4"
          alt=""
        />
      </div>
      <b className={style.rate}>EXELENTE</b>
    </div>
  );
};

export default ProfilePicture;
