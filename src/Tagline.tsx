import armyDesert from "./assets/armyDesert.jpg";
import "./index.css";

function Tagline() {
  return (
    <div className="overviewContainer">
      <div className="leftHeader">
        <h1>See the Unseen</h1>
      </div>

      <div className="overviewImage">
        <img src={armyDesert} alt="Image of soldiers in the desert" />
      </div>
    </div>
  );
}

export default Tagline;
