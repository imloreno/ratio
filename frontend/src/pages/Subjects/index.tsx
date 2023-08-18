import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Title, FrameBox, Filters } from "@components/index";
import { ActiveTasks } from "@features/index";
import { Pagecontent, PageHeader } from "@layouts/index";
import { memo } from "react";

const Subjects = () => {
  const navigation = useLocation();
  const pathList = navigation.pathname.split("/");

  return pathList.length != 2 ? (
    <>
      <PageHeader title="Materias" />
      <Pagecontent styles={{ gridAutoColumns: "1fr .5fr" }}>
        <FrameBox>
          <Filters>
            <Filters.SelectV2 />
          </Filters>
          <FrameBox.Body styles={{ background: "none" }}>
            <ActiveTasks />
          </FrameBox.Body>
        </FrameBox>

        <FrameBox>
          <FrameBox.Header>
            <Title type="subtitle">Detalles</Title>
          </FrameBox.Header>
          <FrameBox.SubMenu>
            <FrameBox.SubMenu.Option link="description">
              Descripcion
            </FrameBox.SubMenu.Option>
            <FrameBox.SubMenu.Option link="details">
              Estudiantes
            </FrameBox.SubMenu.Option>
          </FrameBox.SubMenu>
          <FrameBox.Body>
            <Outlet />
          </FrameBox.Body>
        </FrameBox>
      </Pagecontent>
    </>
  ) : (
    <Navigate to="description" />
  );
};

export default memo(Subjects);
