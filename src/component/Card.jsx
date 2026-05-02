import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import CardText from "./CardText";

const Card = () => {
  const omarRef = useRef();
  const rayyanRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    // Omar moves right smoothly
    tl.to(omarRef.current, {
      xPercent: 125,   // responsive instead of px
      duration: 1.3,
      ease: "power3.out",
    });

    // Rayyan comes from left smoothly (slightly delayed)
    tl.fromTo(
      rayyanRef.current,
      {
        xPercent: 100,
        opacity: -1,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.8" // overlap for smooth feel
    );
  });

  return (
    <div className="h-full w-full">
      <div className="relative mt-5 m-3 overflow-hidden flex">
        
        {/* Omar */}
        <div
          ref={omarRef}
          className="absolute bg-amber-500 w-[45%] h-15 text-white text-5xl text-center uppercase will-change-transform z-20"
        >
          Omar
        </div>
        

        {/* Rayyan */}
        <div
          ref={rayyanRef}
          className="bg-red-500 w-[45%] h-15 text-white text-5xl text-center uppercase will-change-transform z-10"
        >
          Rayyan
        </div>

      </div>
    </div>
  );
};

export default Card;