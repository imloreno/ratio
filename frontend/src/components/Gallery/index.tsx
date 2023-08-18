import { Icons, Title } from "@components/index";
import Picture from "./Picture";
import style from "./gallery.module.css";

interface IGalleryProps {
  title: string;
}

const Gallery = (props: IGalleryProps) => {
  const { title } = props;

  return (
    <div>
      <header className={style.header}>
        <Title type="subtitle">{title}</Title>
        <Icons value="addPicture" className={style.icon} />
      </header>
      <div className={`${style.gallery} scroll-bar`}>
        <div className={style.imgContainer}>
          <Picture className={style.picture} />
          <Picture className={style.picture} />
          <Picture className={style.picture} />
          <Picture className={style.picture} />
          <Picture className={style.picture} />
          <Picture className={style.picture} />
          <Picture className={style.picture} />
          <Picture className={style.picture} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
