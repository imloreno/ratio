import {Title, FrameBox} from "@components/index";
import { ActiveTasks, MyProfileStats, SubjectBlock } from "@features/index";
import { Pagecontent, PageHeader } from "@layouts/index";

const Home = () => {
  return (
    <>
      <PageHeader title="Sistema de administración" />
      <Pagecontent styles={{gridAutoColumns: ".8fr 1fr .8fr"}}>
        <FrameBox>
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

        <FrameBox>
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
