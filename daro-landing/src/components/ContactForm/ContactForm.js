import React from 'react';
import './ContactForm.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';


const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_3ijxasn', 'template_gt5xz5t', form.current, 'user_0nogeYHI0ZhLQWp4PM2s0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
     e.target.reset();
  };

  const smallTextAnimation = useAnimation();
  const largeTextAnimation = useAnimation();

  const [ref, inView] = useInView({threshold: 0.4});

  useEffect(() => {

    if(inView) {
      smallTextAnimation.start({
        translateY: 0,
        opacity: 1
      })

      largeTextAnimation.start({
        translateY: 0,
        opacity: 1
      })
    }

    if(!inView) {

      smallTextAnimation.start({
        translateY: '-10px',
        opacity: 0
      })

      largeTextAnimation.start({
        translateY: '30px',
        opacity: 0
      })
    }
  }, [inView])


  return (

  <div className='contact-section'>

      <div className='floated-bg'>
        
      </div>

      <div ref={ref} className="elements">
        <h3> <motion.span transition={{ duration: 0.2 }} animate={smallTextAnimation} className="small-text">Completează formularul și pune bazele</motion.span>  <br/> <motion.span transition={{ duration: 0.4 }} animate={largeTextAnimation} className='large-text'> <span>unui</span>  <span className='yellow'> parteneriat durabil</span> </motion.span> </h3>

        <form ref={form} onSubmit={sendEmail} className='contact-form'>

            <div className='form-container'>

              <div className="sides left">
                  
                  <span className='form-heading'>
                  Introduceți datele personale:
                  </span>

                  <input type="text" id='fname' name='fname' placeholder='Prenume' />

                  <input type="text" id='lname' name='lname' placeholder='Numele' />

                  <input type='email' id='email' name='email' placeholder='email@gmail.com' />

              </div>

              <div className="middle"></div>

              <div className="sides right">
                <span className='form-heading'>
                  Introduceți mesajul:
                </span>

                <textarea placeholder='Scrie mesajul aici' name="message" id="message" cols="30" rows="10"></textarea>

              </div>

            </div>    

          <button type='submit'>Trimite</button>

        </form>

      </div>
  </div>
  );
};

export default ContactForm;
