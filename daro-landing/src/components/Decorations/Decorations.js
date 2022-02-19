import React from 'react';
import './Decorations.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Decorations = () => {

  const [offsetY, setOffsetY] = useState(0);

  const scrollHandler = () => {
    
    setOffsetY(window.scrollY);
    
  };

  window.addEventListener('scroll', scrollHandler);

  return (

      <div className='decorations' style={{ transform: `translateY(-${offsetY * 0.5}px)` }}>

          <motion.div
          
          initial={{opacity: 0, y:-30}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 1}}
          className='elipse'>  
          </motion.div>

          <motion.img

          initial={{opacity: 0, y:-30}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 1}}
          className='arrow' 
          src='assets/elements/Group 11.png' 
          width='90px' 
          alt='arrow'>
          </motion.img>

          <motion.img 
          initial={{opacity: 0, y:-30}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 1}}
          className='sphere' 
          src='assets/elements/blured sphere.png' 
          alt='sphere'>
          </motion.img>

          <motion.img 
          initial={{opacity: 0, y:-30}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 1}}
          className='diamants' 
          src='assets/elements/diamants.png'
          alt='diamants'></motion.img>

      </div>

  );
};

export default Decorations;
