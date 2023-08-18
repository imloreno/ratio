import {Title, Gallery} from "@components/index";
import style from "./subjectDescription.module.css"

const SubjectDescription = () => {
  return (
    <div className="">
      <Title type="subtitle" className={style.title}>Tarea</Title>
      <div className="">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        <p>
          Mollitia iure officiis, ipsum totam fuga eaque quisquam quos quod enim
          dignissimos quia recusandae, amet cum dolor adipisci!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam
          repellendus impedit autem laboriosam assumenda? Dolore sint cumque
          accusamus voluptas?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ullam
          repellendus impedit autem laboriosam assumenda? Dolore sint cumque
          accusamus voluptas?
        </p>
      </div>
      <Gallery title="Archivos adjuntos:" />
    </div>
  );
};

export default SubjectDescription;
