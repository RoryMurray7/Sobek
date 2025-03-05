import Carousel from "./components/Carousel/Carousel";

const myItems = [
  {
    title: "Digital Signal Monitoring",
    description:
      "Capturing and analyzing intercepted communications, radio signals, and encrypted transmissions to uncover critical intelligence.",
    id: 1,
  },
  {
    title: "Cyber Threat Analysis",
    description:
      "Identifying and neutralizing cyber threats by tracking hacking attempts, malware activity, and digital espionage operations.",
    id: 2,
  },
  {
    title: "Geospatial Reconnaissance",
    description:
      "Utilizing satellite imagery, drone surveillance, and mapping technologies to monitor key locations and detect potential threats.",
    id: 3,
  },
  {
    title: "Social Data Extraction",
    description:
      "Analyzing online conversations, social media trends, and digital interactions to predict behaviors and identify emerging risks.",
    id: 4,
  },
];

function Gathering() {
  return (
    <Carousel
      items={myItems}
      autoplay={true}
      autoplayDelay={5000}
      pauseOnHover={true}
      loop={true}
      round={false}
    />
  );
}

export default Gathering;
