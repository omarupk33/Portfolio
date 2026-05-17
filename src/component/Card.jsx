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

  // Prevents the default behavior of a
    const handleClick = (e) => {
    e.preventDefault();

    console.log('Replace later with some functionality');
  };

  return (
    <div className="h-full w-full">
      <div className="relative mt-5 m-3 overflow-hidden flex">
        
        {/* Omar */}
        <div
          ref={omarRef}
          className="absolute bg-blue-500 w-[45%] h-15 text-white text-5xl text-center uppercase will-change-transform z-20"
        >
        <a href="ex" className="hover:text-blue-700 scale-50" onClick={handleClick} >Omar</a>
        </div>
        

        {/* Rayyan */}
        <div
          ref={rayyanRef}
          className="bg-amber-500 w-[45%] h-15 text-white text-5xl text-center uppercase will-change-transform z-10 "
        >
          <a href="ex" className="hover:text-orange-700" onClick={handleClick} >Rayyan</a>
        </div>

      </div>
    </div>
  );
};

export default Card;