import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header.tsx";
import Overview from "./Overview.tsx";
import Gathering from "./Gathering.tsx";
import Analysis from "./Analysis.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Overview />
    <Gathering />
    <Analysis />
  </StrictMode>
);
