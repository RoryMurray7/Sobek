import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header.tsx";
import Overview from "./Overview.tsx";
import Tagline from "./Tagline.tsx";
import Capabilities from "./Capabilities";
import Packages from "./Packages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Overview />
    <Tagline />
    <Capabilities />
    <Packages />
  </StrictMode>
);
