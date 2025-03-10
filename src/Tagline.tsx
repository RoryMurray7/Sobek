import armyDesert from "./assets/armyDesert.jpg";
import "./index.css";
import TrueFocus from "./components/TrueFocus/TrueFocus";

function Tagline() {
  return (
    <div className="sectionContainer" style={{ backgroundColor: "#909090" }}>
      <div className="leftHeader" id="overviewHeader">
        <div id="trueFocusContainer">
          <TrueFocus
            sentence="See the Unseen"
            manualMode={false}
            blurAmount={5}
            borderColor="#b76b2c"
            animationDuration={2}
            pauseBetweenAnimations={3}
          />
        </div>
        <p id="taglineDescription">
          Sobek is the worlds only intelligence platform that combines human
          intelligence with machine learning to provide unprecedented insight
          into your adversaries, whoever they may be.
        </p>
      </div>

      <div className="taglineImage">
        <img src={armyDesert} alt="Image of soldiers in the desert" />
      </div>
    </div>
  );
}

export default Tagline;
