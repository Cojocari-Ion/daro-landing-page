import React from 'react';
import './Hero.css';
import HeaderAnim from './HeaderAnim/HeaderAnim';
import { motion } from 'framer-motion';


const Hero = () => {


    const services = [

        {
            id: 0,
            title: 'Social Media Marketing',
            image: 'assets/servicespngs/megaphone.png'
        },

        {
            id: 1,
            title: 'Elaborarea Scenariilor de Vânzare',
            image: 'assets/servicespngs/graphic.png'
        },

        {
            id: 2,
            title: 'Implementarea Programelor de Loialitate',
            image: 'assets/servicespngs/coin.png'
        },

        {
            id: 3,
            title: 'Web Design',
            image: 'assets/servicespngs/developement.png'
        },

        {
            id: 4,
            title: 'Crearea Pâlniei de Vânzări',
            image: 'assets/servicespngs/funnel.png'
        },

    ]
 

  return (
     <div className='Hero'>


        <div className='hero-top'>

            <div className='side left-side'>

                <motion.h1
                    initial={{opacity: 0, y:-60}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration: 0.9}}>
                    creăm branduri <br /><span>cu viitor</span>
                </motion.h1>
                
               
                <motion.button type='button'
                    initial={{opacity: 0, y:-60}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration: 0.2}}>
                    Sună acum
                </motion.button>

            </div>


            <div className='side right-side'>
                <HeaderAnim />
            </div>

        </div>

        <div className='hero-bot'>
           {services.map((service,i) => (
               <div className="translated">
                <div
                    initial={{opacity: 0, y:60}}
                    animate={{opacity: 1, y:0}}
                    transition={{duration: 0.9, delay: i * 0.2}} 
                    className='service' key={service.id} id={service.id}>
                    
                    <div id={service.id} className='icon-container'>
                        <img src={service.image} alt={service.img} width='100px'></img>
                    </div>
                    
                    <h3>{service.title}</h3>
                    
                </div>

               </div>
               
           ))}
        </div>

    </div> 
  )
};

export default Hero;
