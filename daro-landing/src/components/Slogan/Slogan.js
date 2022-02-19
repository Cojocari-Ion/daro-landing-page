import React from 'react';
import './Slogan.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const Slogan = () => {

    const sloganFirstRow = [
        {letter: 's'},
        {letter: 'u'},
        {letter: 'c'},
        {letter: 'c'},
        {letter: 'e'},
        {letter: 's'},
        {letter: 'u'},
        {letter: 'l'},
        {letter: ' '},
        {letter: 't'},
        {letter: 'ă'},
        {letter: 'u'}
    ]
    const sloganSecondRow = [
        {letter: 'e'},
        {letter: 's'},
        {letter: 't'},
        {letter: 'e'},
        {letter: ' '},
        {letter: 'ș'},
        {letter: 'i'},
        {letter: ' '},
        {letter: 's'},
        {letter: 'u'},
        {letter: 'c'},
        {letter: 'c'},
        {letter: 'e'},
        {letter: 's'},
        {letter: 'u'},
        {letter: 'l'},
        {letter: ' '},
        {letter: 'n'},
        {letter: 'o'},
        {letter: 's'},
        {letter: 't'},
        {letter: 'r'},
        {letter: 'u'}
    ]

    const [ref, inView] = useInView({threshold: 0.5 
    });


    const animation = useAnimation();


    useEffect(()=> {
        if(inView){
          animation.start({
            opacity: 1,
            x: 0,
            
          });
        }
    
        if(!inView) {
          animation.start({
            opacity: 0,
            x: '-20px',
           
          });
        }
        
    }, [inView, animation])

  return (

    <div ref={ref} className='slogan'>
    <h2>

        {sloganFirstRow.map((item, i) => (
            <motion.span animate={animation} transition={{ duration: 0.3, delay: i * 0.04}} className='dark-span'>{item.letter}</motion.span>
        ))}

        <br />
        
        {sloganSecondRow.map((item, i) => (
            <motion.span  animate={animation} transition={{ duration: 0.3, delay: i * 0.04 + 0.5}}>{item.letter}</motion.span>
        ))}

    </h2>
    </div>
          
  );
};

export default Slogan;
