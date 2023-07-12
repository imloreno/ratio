import FrameBox from "@components/FrameBox";
import Title from "@components/Title";
import { ActiveTasks } from "@features/index";
import { SubjectBlock } from "@features/index";
import Pagecontent from "@layouts/PageContent";
import PageHeader from "@layouts/PageHeader";

const Home = () => {
  return (
    <>
      <PageHeader title="Sistema de administración" />
      <Pagecontent>
        <FrameBox styles={{ width: "70%" }}>
          <FrameBox.Header>
            <Title type="subtitle">Materias</Title>
          </FrameBox.Header>
          <FrameBox.Body>
            <SubjectBlock />
          </FrameBox.Body>
        </FrameBox>

        <FrameBox>
          <FrameBox.Header>
            <Title type="subtitle">Tareas activas</Title>
          </FrameBox.Header>
          <FrameBox.Body>
            <ActiveTasks />
          </FrameBox.Body>
        </FrameBox>

        <FrameBox styles={{ width: "70%" }}>
          <FrameBox.Header>
            <Title type="subtitle">Perfil</Title>
          </FrameBox.Header>
          <FrameBox.Body> This is the body</FrameBox.Body>
        </FrameBox>
      </Pagecontent>
    </>
  );
};

export default Home;
