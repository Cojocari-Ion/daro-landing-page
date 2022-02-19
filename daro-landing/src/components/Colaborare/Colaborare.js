import React from 'react';
import './Colaborare.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import ColabItems from './ColabItems/ColabItems';


const Colaborare = () => {

  const [ref, inView] = useInView({threshold: 0.5
  });
  const animation = useAnimation();
  const tittleAnimation = useAnimation();

  useEffect(()=> {
    if(inView){
      animation.start({
        
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        }
      });

      tittleAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        }
      });
    }

    if(!inView) {
      animation.start({
        
        opacity: 0,
        y: '-40px'
      });

      tittleAnimation.start({
        opacity: 0,
        y: '-40px'
        
      });
    }
    
  }, [inView, animation, tittleAnimation])

  return (
 
    <div  className='colaborare'>

      <motion.div ref={ref} animate={animation} className='decorations'>

        <img className='sphere1' src='assets/colaborationpngs/decosphere1.png' alt='sphere1'></img>
        <img className='sphere2' src='assets/colaborationpngs/decosphere2.png' alt='sphere2'></img>
        <img className='background' src='assets/colaborationpngs/background.png' width='1700px' alt='background'></img>    

      </motion.div>
      
      <div className='container'>

        <motion.h3 ref={ref} animate={tittleAnimation}>cum are loc <br /> <span>colaborarea?</span></motion.h3>
        <motion.div ref={ref} animate={tittleAnimation} className='divider'></motion.div>
        
        <ColabItems />

      </div> 
                                     
    </div>
  );
};

export default Colaborare;
