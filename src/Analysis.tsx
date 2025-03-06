import LetterGlitch from "./components/LetterGlitch/LetterGlitch";
import "./index.css";
import microchip from "./assets/microchip.png";

function Analysis() {
  return (
    <div className="analysisContainer">
      <div className="analysisTitle">
        <h1>Data Analysis</h1>
      </div>
      <div className="analysisIcon">
      <img src={microchip} alt="microchip" className="microchip" />
        <div className="letterGlitchContainer">
          <div className="letterGlitch">
            <LetterGlitch
            glitchColors={["#FF0000", "#00FF00", "#0000FF"]}
            glitchSpeed={0.1}
            centerVignette={true}
            outerVignette={false}
            smooth={true}
            />
          </div>
        </div>
        </div>
    </div>
  );
}

export default Analysis;
