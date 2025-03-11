import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = () => {
  useEffect(() => {
    // Select all divs with the class "animated"
    const animatedDivs = gsap.utils.toArray(".animated");

    animatedDivs.forEach((div) => {
      gsap.fromTo(
        div,
        { opacity: 0, y: 50 }, // Start invisible and slightly down
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: div,
            start: "top 85%", // Animation starts when the top of the div is at 85% of the viewport
            end: "top 50%", // Stops when the top reaches 50% of the viewport
            scrub: false, // No scrubbing, just a smooth fade-in
          },
        }
      );
    });
  }, []);
};

export default useScrollAnimation;
