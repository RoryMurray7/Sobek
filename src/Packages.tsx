import "./index.css";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard";

function Packages() {
  return (
    <div
      className="sectionContainer"
      id="packagesContainer"
    >
      <div className="large" id="overviewHeader">
        <h1>Packages</h1>
      </div>
      <div className="packagesCardContainer">
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(77, 77, 77, 0.5)">
            <div className="packagesCardHeader">
              <h5 className="packagesText">Baseline Intelligence</h5>
            </div>
            <hr></hr>
            <h6>test</h6>

        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(77, 77, 77, 0.5)">
            <div className="packagesCardHeader">
              <h5 className="packagesText">Advanced Intelligence</h5>
            </div>
            <hr></hr>

        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(77, 77, 77, 0.5)">
            <div className="packagesCardHeader">
              <h5 className="packagesText">Elite & Covert Operations Support</h5>
            </div>
            <hr></hr>

        </SpotlightCard>
      </div>
    </div>
  );
}

export default Packages;
