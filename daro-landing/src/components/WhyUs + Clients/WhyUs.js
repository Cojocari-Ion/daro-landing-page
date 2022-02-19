import React from 'react';
import Clients from './Clients/Clients';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import {  useViewportScroll } from 'framer-motion';
import { useTransform } from 'framer-motion';

import './WhyUs.css';

const WhyUs = () => {
    const motives = [
        {
            id: 0,
            number: '01',
            tittle: 'excelență',
            text: 'Acordăm atenție maximă fiecărui detaliu pentru a oferi cele mai optime soluții.',
            delay: 0.1
        },

        {
            id: 1,
            number: '02',
            tittle: 'integritate',
            text: 'Respectăm promisiunile, integritatea echipei nostre este pe prim plan. Suntem onești și transparentă în tot ceea ce facem. Spunem lucrurilor pe nume când credem că o idee nu este în interesul clientului.',
            delay: 0.2
        },

        {
            id: 2,
            number: '03',
            tittle: 'creativitate',
            text: 'Cercetăm și generăm soluții creative care nu doar te vor ajuta să ajungi la obiectiv, dar și te vor scoate în evidență.',
            delay: 0.3
        },

        {
            id: 3,
            number: '04',
            tittle: 'fiabilitate',
            text: 'Respectăm  promisiunile și termen limită. Alegem abordarea proactiva deoarece tratăm afacerea partenerului ca pe una proprie.',
            delay: 0.4
        },

        {
            id: 4,
            number: '05',
            tittle: 'parteneriat',
            text: 'Asemenea unui prieten de încredere, punem pe primul plan interesele afacerii tale și colaborăm împreuna in scopul obtinerii unui rezultat maxim.',
            delay: 0.5
        }
    ]

    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100]);
    
    const [direction, setDirection] = useState('');
    
    const setLeftDIrection = () => {
        setDirection('left');
    }

    const setRightDIrection = () => {
        setDirection('right');
    }

    const [ref, inView] = useInView({threshold: 0.5});

    const animation = useAnimation();
    const containerAnimation = useAnimation();
    const bgAnimation = useAnimation();


    useEffect(()=> {
        if(inView){
        
        bgAnimation.start({
            y: 100,
        })

        animation.start({
            opacity: 1,
            y: 0,
            
            
          });
        }
    
        if(!inView) {
        
            bgAnimation.start({
                y: 0,
            })

        animation.start({
            opacity: 0,
            y: '-10px',
            
          });
        }
        
      }, [inView, animation])


  return (
  
  <div className='whyUs'>

    
    <motion.div  transition={{duration: 1}} animate={bgAnimation} className='floated-bg'>

    </motion.div>
    

    <div className='elements'>
        
        <div className='clients-container'>
            <Clients/>

        </div>
    
        <h2>
            de ce <br></br> <span>daro agency?</span>
        </h2>

        <div className='divider'>

        </div>

        <div animate={containerAnimation} transition={{duration: 1}} className={`container floated-${direction}`}>
            {motives.map((item)=> (
                <motion.div key={item.id}  animate={animation} transition={{ duration: item.delay }}  className='motiv'>
                    <motion.div whileHover={{ y: -15, }} transition={{duration: 0.1, delay: 0}} className='hover-motion'>
                        <span>{item.number}</span>

                        <div className='content'>
                            
                            <h3>
                                {item.tittle}
                            </h3>

                            <p>
                                {item.text}
                            </p>

                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>

    </div>

    <div  ref={ref} onMouseOver={setLeftDIrection} className="left directions">
            
    </div>

    <div onMouseOver={setRightDIrection} className="right directions">

    </div>

  </div>
  
  );
};

export default WhyUs;
