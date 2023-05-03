import { useState } from "react";

const useMenu = () => {
  const [toggle, setToggle] = useState(
    localStorage.getItem("myCat") === "true" || false
  );
  const handleToggle = () => {
    localStorage.setItem("myCat", !toggle ? "true" : "false");
    setToggle(!toggle);
  };

  return { toggle, handleToggle };
};

export default useMenu;
