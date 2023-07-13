import FrameBox from "@components/FrameBox";
import Title from "@components/Title";
import { ActiveTasks, MyProfileStats, SubjectBlock } from "@features/index";
import { Pagecontent, PageHeader } from "@layouts/index";

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

        <FrameBox styles={{ width: "75%" }}>
          <FrameBox.Header>
            <Title type="subtitle">Mi estado</Title>
          </FrameBox.Header>
          <FrameBox.Body className="scroll-hidden">
            <MyProfileStats />
          </FrameBox.Body>
        </FrameBox>
      </Pagecontent>
    </>
  );
};

export default Home;
