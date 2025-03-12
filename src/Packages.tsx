import "./index.css";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";

function Packages() {
  return (
    <div
      className="sectionContainer"
      id="pricingContainer"
    >
      <div className="large" id="overviewHeader">
        <h1>Packages</h1>
      </div>
      <div className="pricingCardContainer">
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(77, 77, 77, 0.5)">
            <h5 className="pricingText">Baseline Intelligence</h5>

        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(77, 77, 77, 0.5)">
            <h5 className="pricingText">Advanced Intelligence</h5>

        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(77, 77, 77, 0.5)">
            <h5 className="pricingText">Elite & Covert Operations Support</h5>
            <h2 className="pricingText">Contact Us</h2>

        </SpotlightCard>
      </div>
    </div>
  );
}

export default Packages;
