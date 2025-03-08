import Carousel from "./components/Carousel/Carousel";
import antenna from "./assets/antenna.png";
import cyberThreat from "./assets/cyber-threat.png";
import satelite from "./assets/satelite.png";
import dataMining from "./assets/data-mining.png";

const myItems = [
  {
    title: "Digital Signal Monitoring",
    description:
      "Capturing and analyzing intercepted communications, radio signals, and encrypted transmissions to uncover critical intelligence.",
    id: 1,
    icon: <img src={antenna} className="gatheringIcons" />,
  },
  {
    title: "Cyber Threat Analysis",
    description:
      "Identifying and neutralizing cyber threats by tracking hacking attempts, malware activity, and digital espionage operations.",
    id: 2,
    icon: <img src={cyberThreat} className="gatheringIcons" />,
  },
  {
    title: "Geospatial Reconnaissance",
    description:
      "Utilizing satellite imagery, drone surveillance, and mapping technologies to monitor key locations and detect potential threats.",
    id: 3,
    icon: <img src={satelite} className="gatheringIcons" />,
  },
  {
    title: "Social Data Extraction",
    description:
      "Analyzing online conversations, social media trends, and digital interactions to predict behaviors and identify emerging risks.",
    id: 4,
    icon: <img src={dataMining} className="gatheringIcons" />,
  },
];

function Gathering() {
  return (
    <div className="sectionContainer" style={{ backgroundColor: "#707070" }}>
      <Carousel
        items={myItems}
        autoplay={true}
        autoplayDelay={5000}
        pauseOnHover={true}
        loop={true}
        round={false}
      />
      <div className="rightHeader">
        <h1>Intelligence Gathering</h1>
      </div>
    </div>
  );
}

export default Gathering;
