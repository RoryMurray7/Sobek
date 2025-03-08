import LetterGlitch from "./components/LetterGlitch/LetterGlitch";
import "./index.css";
import microchip from "./assets/microchip.png";

function Analysis() {
  return (
    <div className="sectionContainer">
      <div className="leftHeader">
        <h1>Data Analysis</h1>
      </div>
      <div className="analysisIcon">
        <img src={microchip} alt="microchip" className="microchip" />
        <div className="letterGlitchContainer">
          <div className="letterGlitch">
            <LetterGlitch
              glitchColors={["#b76b2c", "b3522c", "#a67a2c"]}
              glitchSpeed={0.1}
              centerVignette={false}
              outerVignette={true}
              smooth={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
