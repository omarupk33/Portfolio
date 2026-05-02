import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const CardText = () => {

  const cardText = useRef();

  useGSAP(() => {
    gsap.from(cardText.current, {
      y: -100,          // start slightly down
      opacity: 0,     // start hidden
      duration: 1.5,
      delay: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={cardText} className='absolute top-40 left-0 w-full z-0'>
        <div className='flex justify-between m-10'>

      <div className='w-[40%]'>
        <p className='bg-white text-center uppercase p-3'>
          Lorem ipsum dolor sit, amet consectetur adipi
        </p>
      </div>
      <div className='w-[40%]'>
        <p className='bg-white text-center uppercase p-3'>
          Lorem ipsum dolor sit, amet consectetur adipi
        </p>
      </div>
        </div>
    </div>
  );
};

export default CardText;