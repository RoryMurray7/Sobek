import worldMap from "./assets/worldMap.png";
import "./index.css";

function Overview() {
  return (
    <div
      className="sectionContainer"
      id="overviewContainer"
    >
      <div className="leftHeader large" id="overviewHeader">
        <h1>A new generation of Global Military Intelligence</h1>
      </div>

      <div className="overviewImage">
        <img src={worldMap} alt="World Map" />
      </div>
    </div>
  );
}

export default Overview;
