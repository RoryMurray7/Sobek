import satelliteImage from "./assets/satelliteImage.jpg";

function SatelliteDemo() {
  return (
    <div className="sectionContainer">
        <img src={satelliteImage} alt="satelliteImage" id="satelliteImage"/>
      <div className="rightHeader">
        <h1>Intelligence Gathering</h1>
      </div>
    </div>
  );
}

export default SatelliteDemo;
