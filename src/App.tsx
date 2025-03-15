import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./index.css";
import Header from "./Header.tsx";
import Overview from "./Overview.tsx";
import Tagline from "./Tagline.tsx";
import Capabilities from "./Capabilities";
import Packages from "./Packages";
import Termsofservice from "./Termsofservice.tsx";
import Footer from "./Footer.tsx";
import Privacypolicy from "./Privacypolicy.tsx";

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
        <Route path="/terms-of-service" element={<Termsofservice />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
