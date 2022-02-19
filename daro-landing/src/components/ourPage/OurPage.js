import React from 'react';
import './OurPage.css';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const OurPage = () => {

  const posts = [
    {
      id: 0,
      img: 'assets/our-page-imgs/posts/statue.png',
      name: 'statue',
      class: 'top',
      link: 'https://www.instagram.com/p/CWpwzIEgdRQ/'
    },

    {
      id: 1,
      img: 'assets/our-page-imgs/posts/dolar.png',
      name: 'dollar',
      class: 'top',
      link: 'https://www.instagram.com/p/CWp31vxA-Aa/'
    },

    {
      id: 2,
      img: 'assets/our-page-imgs/posts/yellow.png',
      name: 'yellow',
      class: 'bot',
      link: 'https://www.instagram.com/p/CWpzHJdgw--/'
    },

    {
      id: 3,
      img: 'assets/our-page-imgs/posts/thinker.png',
      name: 'thinker',
      class: 'bot',
      link: 'https://www.instagram.com/p/CYizc-aA-gR/'
    },

  ]

  const [ref, inView] = useInView({threshold: 0.4});

  const linksAnimation = useAnimation();

  const titleAnimation = useAnimation();

  useEffect(()=> {

      if(inView){
        linksAnimation.start({
          opacity: 1,
          rotateY: 0,
          transformPerspective: 0
        });

        titleAnimation.start({
          y: 0
        })
      }


  
      if(!inView) {
        linksAnimation.start({
          opacity: 0,
          rotateY: -20,
          transformPerspective: 8000
         
        });

        titleAnimation.start({
          y: '-50px'
        })
      }
      
  }, [inView, linksAnimation])

  return (

    <div className="ourPage">
        <div className="decoration">
          <div className="blueBg">
            <img src="assets/our-page-imgs/logo.png" alt="transparent logo"/>
          </div>

          <div className="decoration-bottom">
            <img className='dotted-bg' src="assets/our-page-imgs/dottedbg.png" alt="dotted bg" />
            <img className='sphere' src="assets/our-page-imgs/sphere.png" alt="sphere" />
            <img className='rectangle' src="assets/our-page-imgs/rectangle.png" alt="rectangle" />
          </div>

        </div>

        <div className="content">

          <div className="sides left-side">
            <motion.h3 animate={titleAnimation} transition={{duration: 1}}>Abonează-te la <br /> <a className='link' href="https://www.instagram.com/daro.agency/">Pagina Noastră de Instagram <i class="fab fa-instagram"></i> </a></motion.h3>
            <p className='info'>Află mai multe despre programele de loialitate și despre istoriile de succes ale clineților noștri</p>
          </div>

          <div className="sides right-side">

            <div ref={ref} className="posts-container">

              {posts.map((post, i) => (
                <motion.div transition={{ duration: 0.4, delay: i * 0.1}} animate={linksAnimation} className={`img-container`}>
                  <div className={`motion-container ${post.class}`}>

                    <div>
                        
                      <img className='image' src={post.img} width='230px' alt={post.name}/>
                      
                      <a href={post.link}>
                        <div className="icon-container">
                          <i class="fas fa-heart"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

            </div>

          </div>

        </div>
    </div>

  );
};

export default OurPage;
