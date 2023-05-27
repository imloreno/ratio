import { useState } from "react";

const useMenu = () => {
  const [toggle, setToggle] = useState(
    localStorage.getItem("menu-toggle") === "true" || false
  );
  const handleToggle = () => {
    localStorage.setItem("menu-toggle", !toggle ? "true" : "false");
    setToggle(!toggle);
  };

  return { toggle, handleToggle };
};

export default useMenu;
