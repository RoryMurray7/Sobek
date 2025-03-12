import "./index.css";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";

function Packages() {
  return (
    <div
      className="sectionContainer"
      id="overviewContainer"
    >
      <div className="pricingCardContainer">
        <div className="large" id="overviewHeader">
          <h1>Packages</h1>
        </div>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(77, 77, 77, 0.2)">
            <p>hey</p>

        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(77, 77, 77, 0.2)">
            <p>hey</p>

        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(77, 77, 77, 0.2)">
            <p>hey</p>

        </SpotlightCard>
      </div>
    </div>
  );
}

export default Packages;
