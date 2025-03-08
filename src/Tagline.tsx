import armyDesert from "./assets/armyDesert.jpg";
import "./index.css";

function Tagline() {
  return (
    <div className="sectionContainer" style={{ backgroundColor: "#B0B0B0" }}>
      <div className="leftHeader" id="overviewHeader">
        <h1>See the Unseen</h1>
      </div>

      <div className="taglineImage">
        <img src={armyDesert} alt="Image of soldiers in the desert" />
      </div>
    </div>
  );
}

export default Tagline;
