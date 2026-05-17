import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import reactIcon from '../assets/react1.png';
import tailwind from '../assets/pngwing.png';
import csharp from '../assets/seecharp.com.png';
import python from '../assets/python.png';
import javascript from '../assets/javascript.png';
import eagle from '../assets/eagle.png';
import lion from '../assets/lion.png';

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

    const handleClick = (e) => {
    e.preventDefault();
     
    console.log('Replace later with some functionality');
  };


  return (
    <div ref={cardText} className='absolute top-40 left-0 w-full z-0'>
      
      <div className='flex justify-between mx-10'>

        {/* LEFT SIDE */}
        <div className='w-[40%] flex items-center justify-between gap-6 z-10'>

          <a href="ex" className="hover:brightness-75" onClick={handleClick}>
          <img 
            src={reactIcon}
            className="iconDrop w-28 h-40 object-contain" 
            alt="React"
          />
          </a>

          <a href="ex" className="hover:brightness-75" onClick={handleClick}>
          <img 
            src={tailwind} 
            className="iconDrop w-28 h-20 object-contain" 
            alt="Tailwind"
          />
          </a>

          <a href="ex" className="hover:brightness-75" onClick={handleClick}>
          <img 
            src={csharp} 
            className="iconDrop w-28 h-20 object-contain" 
            alt="CSharp"
          />
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className='w-[40%] flex items-center justify-between gap-6 z-10'>
          <a href="ex" className="hover:brightness-75" onClick={handleClick}>
          <img 
            src={python} 
            className="iconDrop w-28 h-20 object-contain pointer" 
            alt="Python"
          />
          </a>

        <a href="ex" className="hover:brightness-75" onClick={handleClick}>
        <img 
            src={javascript} 
            className="iconDrop w-28 h-20 object-contain" 
            alt="JavaScript"
          />
        </a>
        
        <a href="ex" className="hover:brightness-75" onClick={handleClick}>
        <img 
            src={reactIcon} 
            className="iconDrop w-28 h-20 object-contain" 
            alt="React"
          />
          </a>

        </div>
        {/* background images */}
        <div className='absolute w-[80%] flex justify-between mx-20'>
          <img src={lion}                                                 
          className='w-[55vh] blur-sm -z-10'
          alt="Eagle"
          />
          <img src={eagle}
          className='w-[60vh] blur-sm -z-10'
          alt="Lion"
          />
        </div>
      </div>
    </div>
  );
};

export default CardText;