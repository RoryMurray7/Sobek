import Carousel from "./components/Carousel/Carousel";

function Gathering() {
  return (
    <Carousel
      baseWidth={800}
      autoplay={true}
      autoplayDelay={4000}
      pauseOnHover={true}
      loop={true}
      round={false}
    />
  );
}

export default Gathering;
