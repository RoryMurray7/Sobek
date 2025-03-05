import Carousel from "./components/Carousel/Carousel"

const carouselItems = [
    (
        <>
            <h1>Hello</h1>
        </>
    ),
    (
        <>
            <h1>World</h1>
        </>
    )
]

function Gathering() {
    return (
      <Carousel
        items={carouselItems}
        baseWidth={800}
        autoplay={true}
        autoplayDelay={4000}
        pauseOnHover={true}
        loop={true}
        round={false}
        />
    )
  }

export default Gathering