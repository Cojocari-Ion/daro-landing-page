import React from 'react';
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const HeaderAnim = () => {

    const animContainer = useRef(null);

    useEffect(() => {

        lottie.loadAnimation({
            container: animContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./anim.json')
        })

    }, [])

  return (
    <div className='header-anim' ref={animContainer}>

    </div>
  )
}

export default HeaderAnim