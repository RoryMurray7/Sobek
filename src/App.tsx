import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./index.css";
import Header from "./Header.tsx";
import Overview from "./Overview.tsx";
import Tagline from "./Tagline.tsx";
import Capabilities from "./Capabilities";
import Packages from "./Packages";
import TermsAndConditions from "./Termsconditions.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Header stays on all pages */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Overview />
              <Tagline />
              <Capabilities />
              <Packages />
            </>
          }
        />

        {/* Terms and Conditions page */}
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
