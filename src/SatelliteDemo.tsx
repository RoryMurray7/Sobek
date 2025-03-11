import satelliteImage from "./assets/baseSatellite.png";

function SatelliteDemo() {
  return (
    <div className="sectionContainer">

      <div className="imageContainer">
        <img src={satelliteImage} alt="satelliteImage" id="satelliteImage"/>
        <div className="filterLayer" />
        <div className="separatorLine" />
      </div>

      <div className="rightHeader">
        <h1>Intelligence Gathering</h1>
      </div>
    </div>
  );
}

export default SatelliteDemo;
