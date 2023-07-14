import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Title, FrameBox } from "@components/index";
import { ActiveTasks } from "@features/index";
import { Pagecontent, PageHeader } from "@layouts/index";
import { memo } from "react";

const Subjects = () => {
  const navigation = useLocation();
  const pathList = navigation.pathname.split("/");

  return pathList.length != 2 ? (
    <>
      <PageHeader title="Materias" />
      <Pagecontent>
        <FrameBox>
          <FrameBox.Header styles={{ background: "none" }}>
            filter list
          </FrameBox.Header>
          <FrameBox.Body styles={{ background: "none" }}>
            <ActiveTasks />
          </FrameBox.Body>
        </FrameBox>

        <FrameBox styles={{ width: "35rem" }}>
          <FrameBox.Header>
            <Title type="subtitle">Detalles</Title>
          </FrameBox.Header>
          <FrameBox.SubMenu>
            <FrameBox.SubMenu.Option link="description">
              Descripcion
            </FrameBox.SubMenu.Option>
            <FrameBox.SubMenu.Option link="details">
              Detalles
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
