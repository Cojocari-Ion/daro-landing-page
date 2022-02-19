import React from 'react';
import { useEffect, useState, useRef } from 'react';
import lottie from 'lottie-web';
import './Animation.css';
import { motion } from 'framer-motion';

const Animation = () => {

    const [disappear, setDisappear] = useState('animation')

    const container = useRef(null);

    const changeDisappear =()=> {
        setDisappear('disappearing');
    }


  useEffect(() => {
    const timer = setTimeout(() => {
        changeDisappear()
      }, 4500);
      

    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('./data.json')
    })

    return () => clearTimeout(timer);
  }, [])

  return ( 
    <motion.div 
    initial={{opacity: 1}}
    animate={{opacity: 0, }}
    transition={{duration: 1, delay: 3}} 
    className={disappear}>

          <motion.div  initial={{opacity: 1}}
                animate={{opacity: 0, }}
                transition={{duration: 0.8, delay: 3.5}}
                className='animation-container' ref={container}>

          </motion.div>

    </motion.div>

  )
}

export default Animation