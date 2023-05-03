import Home from "./Home";

type PageList = {
  [key: string]: JSX.Element;
};

export const Pages = (page: string): JSX.Element => {
  const pages: PageList = {
    home: <Home />,
    subjects: <div>Materias</div>,
  };
  return <main className="main">{pages[page] || <Home />}</main>;
};
