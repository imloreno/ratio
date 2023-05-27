import React from "react";
import ReactDOM from "react-dom/client";
import Router from "@router/index.tsx";
import "@styles/main.css";
import "@styles/escentials.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
