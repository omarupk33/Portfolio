import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import reactIcon from '../assets/react1.png';
import tailwind from '../assets/pngwing.png';
import csharp from '../assets/seecharp.com.png';
import python from '../assets/python.png';
import javascript from '../assets/javascript.png';

const CardText = () => {

  const cardText = useRef();

  useGSAP(() => {
    gsap.from(cardText.current, {
      y: -100,
      opacity: 0,
      duration: 1.5,
      delay: 1.5,
      ease: "power3.out",
    });
  }, []);

  useGSAP(() => {
    gsap.from('.iconDrop', {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      delay: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={cardText} className='absolute top-40 left-0 w-full z-0'>
      
      <div className='flex justify-between m-10'>

        {/* LEFT SIDE */}
        <div className='w-[40%] flex items-center justify-between gap-6'>

          <img 
            src={reactIcon}
            className="iconDrop w-28 h-40 object-contain" 
            alt="React"
          />

          <img 
            src={tailwind} 
            className="iconDrop w-28 h-20 object-contain" 
            alt="Tailwind"
          />

          <img 
            src={csharp} 
            className="iconDrop w-28 h-20 object-contain" 
            alt="Tailwind"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className='w-[40%] flex items-center justify-between gap-6'>
          <img 
            src={python} 
            className="iconDrop w-28 h-20 object-contain" 
            alt="Tailwind"
          />

        <img 
            src={javascript} 
            className="iconDrop w-28 h-20 object-contain" 
            alt="Tailwind"
          />

        <img 
            src={reactIcon} 
            className="iconDrop w-28 h-20 object-contain" 
            alt="Tailwind"
          />

        </div>

      </div>

    </div>
  );
};

export default CardText;