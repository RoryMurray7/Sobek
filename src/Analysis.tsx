import Orb from "./components/Orb/Orb";
import "./index.css";

function Analysis() {
  return (
    <div className="analysisContainer">
      <div className="analysisTitle">
        <h1>Data Analysis</h1>
      </div>
      <div className="orb">
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
