import Orb from "./components/Orb/Orb";
import "./index.css";

function Analysis() {
  return (
    <div className="analysisContainer">
      <div className="analysisTitle">
        <h1>Data Analysis</h1>
      </div>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={210}
          forceHoverState={false}
        />
      </div>
    </div>
  );
}

export default Analysis;
