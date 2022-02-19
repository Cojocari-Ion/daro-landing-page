import React from 'react';

import './Clients.css';
import { useState } from 'react';


const Clients = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
    } else {
      setSlideIndex(slideIndex >= 3 ? 0 : slideIndex + 1)
    };
  };

  const style = {
    transform: `translateX(-${slideIndex * 100}%)`
  }

  return (
  
  <div className='clients'>
      <h4>Our clients</h4>

      <div onClick={()=> handleClick('left')} className='chevrone-container chevrone-container-left'>
        <i class="fas fa-chevron-left"></i>
      </div>

      <div onClick={()=> handleClick('right')} className='chevrone-container chevrone-container-right'>
        <i class="fas fa-chevron-right"></i>
      </div>

      <div className='slider'>
        <div style={style} className='slider-container'>

          <div className='slider-path'>

            <div className='logo-container'>
              <img src='assets/clients/dulcinella.png' alt='dulcnella'></img>
            </div>

            <div className='logo-container'>
              <img src='assets/clients/loial.png' alt='loial'></img>
            </div>

            <div className='logo-container'>
              <img src='assets/clients/babyboom.png' alt='babyboom'></img>
            </div>

            <div className='logo-container'>
              <img src='assets/clients/bomba.png' alt='bomba'></img>
            </div>

          </div>

          <div className='slider-path'>

            <div className='logo-container'>
              <img src='assets/clients/trend.png' alt='trend'></img>
            </div>

            <div className='logo-container'>
              <img src='assets/clients/sano.png' alt='sano'></img>
            </div>

            <div className='logo-container'>
              <img src='assets/clients/hellen.png' alt='hellen'></img>
            </div>

            <div className='logo-container'>
              <img src='assets/clients/tabaco.png' alt='casadeltabaco'></img>
            </div>

          </div>

          <div className='slider-path'>

            <div className='logo-container'>
              <img src='assets/clients/inamstro.png' alt='inamstro'></img>
            </div>

            <div className='logo-container'>
              <img src='assets/clients/infinity.png' alt='infinity'></img>
            </div>

            <div className='logo-container'>
              <img src='assets/clients/artima.png' alt='artima'></img>
            </div>

            <div className='newton-container logo-container'>
              <img className='newton-logo' src='assets/clients/newton.png' width='100px' alt='newton'></img>
            </div>

          </div>

          <div className='slider-path'>

            <div className='logo-container'>
              <img src='assets/clients/newton-botanica.png' alt='inamstro'></img>
            </div>

            <div className='logo-container'>
              <img src='assets/clients/uds.png' alt='infinity'></img>
            </div>

            <div className='logo-container'>
              
            </div>

            <div className='newton-container logo-container'>
              
            </div>

          </div>

        </div>
        
      </div>

  </div>
  
  );
};

export default Clients;
