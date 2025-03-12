import baseSatellite from "./assets/baseSatellite.png";
import droneImage from "./assets/parrotAnafi.png";
import radarDish from "./assets/radarDish.png";

function Capabilities() {
  return (
    <div className="sectionContainer" id="capabilitiesContainer">
      <div className="leftHeader" style={{ width: "50vw" }}>
        <h1>Our Capabilities</h1>
      </div>

      <div className="capabilitiesColumnContainer">
        <div className="capabilitiesColumn column1">
          <div className="capabilitiesCard">
            <img className="capabilitiesCardImage" src={droneImage}></img>
            <p className="imageTitle">Aerial Reconnaissance</p>
          </div>

          <div className="capabilitiesCard">
            <img className="capabilitiesCardImage" src={droneImage}></img>
            <p className="imageTitle">Aerial Reconnaissance</p>
          </div>
        </div>

        <div className="capabilitiesColumn column2">
          <div className="capabilitiesCard">
            <img className="capabilitiesCardImage" src={droneImage}></img>
            <p className="imageTitle">Aerial Reconnaissance</p>
          </div>

          <div className="capabilitiesCard">
            <img className="capabilitiesCardImage" src={droneImage}></img>
            <p className="imageTitle">Aerial Reconnaissance</p>
          </div>
        </div>

        <div className="capabilitiesColumn column3">
          <div className="capabilitiesCard">
            <img className="capabilitiesCardImage" src={droneImage}></img>
            <p className="imageTitle">Aerial Reconnaissance</p>
          </div>

          <div className="capabilitiesCard">
            <img className="capabilitiesCardImage" src={droneImage}></img>
            <p className="imageTitle">Aerial Reconnaissance</p>
          </div>
        </div>
      </div>

      {/* <div className="capabilitiesCardContainer">
        <div className="capabilitiesCard">
          <img className="capabilitiesCardImage" src={droneImage}></img>
          <p className="imageTitle">Aerial Reconnaissance</p>
        </div>

        <div className="capabilitiesCard">
          <img className="capabilitiesCardImage" src={baseSatellite}></img>
          <p className="imageTitle">
            Satellite<br></br>Imagery
          </p>
        </div>

        <div className="capabilitiesCard">
          <img className="capabilitiesCardImage" src={radarDish}></img>
          <p className="imageTitle">Radar & Signal Monitoring</p>
        </div>

        <div className="capabilitiesCard">
          <div className="capabilitiesCardImage"></div>
        </div>
      </div> */}
    </div>
  );
}

export default Capabilities;
