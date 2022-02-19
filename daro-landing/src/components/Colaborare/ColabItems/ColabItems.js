import React from 'react';
import './ColabItems.css'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';


const ColabItems = () => {

    const [value, setValue] = useState(0);

    const items = [
        {
          id: 0,
          tittle: 'analiza',
          icon: 'assets/colabicons/analysis.png',
          hoveredIcon: 'assets/colabicons/analysiswhite.png',
          text: 'Examinăm unde se află afacerea ta la momentul actual și care sunt punctele forte și slabe ale acesteia.',
          delay: 0.1
        },
    
        {
          id: 1,
          tittle: 'idee',
          icon: 'assets/colabicons/bulb.png',
          hoveredIcon: 'assets/colabicons/bulbwhite.png',
          text: 'Generăm idei pentru a evidenția avantajele competitive și soluționa dificultățile existente.',
          delay: 0.2
        },
    
        {
          id: 2,
          tittle: 'soluții',
          icon: 'assets/colabicons/solutions.png',
          hoveredIcon: 'assets/colabicons/solutionswhite.png',
          text: 'Creăm soluții reieșind din necesitățile afacerii tale: elaborăm campanii publicitare, automatizăm procese, creăm scripturi pentru instruirea personalului, etc.',
          delay: 0.3
        },
    
        {
          id: 3,
          tittle: 'impact',
          icon: 'assets/colabicons/graphic.png',
          hoveredIcon: 'assets/colabicons/graphicwhite.png',
          text: 'Monitorizăm impactul și evaluăm rezultatele.',
          delay: 0.4
        },
      ]
    
    const [ref, inView] = useInView({threshold: 0.4 
    });
    const animation = useAnimation();


    useEffect(()=> {
        if(inView){
          animation.start({
            opacity: 1,
            y: 0,
            
          });
        }
    
        if(!inView) {
          animation.start({
            opacity: 0,
            y: '-10px',
           
          });
        }
        
    }, [inView, animation])
    
  return (
    
    <div className='colab-items-container'>
        <div ref={ref} className='colab-items'>
            {items.map((item) => (
                <motion.div className={`item ${item.id === value && 'active'}`} onClick={(e)=> {setValue(item.id)}} animate={animation} transition={{ duration: 0.3, delay: item.delay}} key={item.id}  id={item.id}>
                <h4>
                    {item.tittle}
                </h4>

                <div className='icon colored'>
                  <img width='90px' src={item.icon} alt={item.tittle} />
                </div>

                <div  className='icon white'>
                  <img width='90px' src={item.hoveredIcon} alt={item.tittle, 'white'} />
                </div>


                </motion.div>
            ))}
                
        </div>

        <div className='text'>
                <p>{items[value].text}</p>
        </div>
        
    </div>
    
    );
};

export default ColabItems;
