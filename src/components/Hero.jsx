import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles, { layout } from '../style';
import Socials from './Socials'; 
import { myProfile, myProfile_w } from '../assets';

const Hero = () => { 
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className={`flex md:flex-row flex-col md:ml-20 md:mt-10 ml-0 mt-0 ${styles.paddingY} ${layout.sectionReverse}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        {/* First div with "Hello people" */}
        <div className="ss:text-[18px] text-[16px] font-inter text-gray font-bold dark:text-white">
          Hey, There! <span className="text-2xl wave"> &#128075; </span>
        </div>

        {/* Second div with developer intro */}
        <div className="font-inter font-extralight ss:text-[45px] text-[30px] max-w-[670px] dark:text-white">
          I’m <span className="text-blue font-bold drop-shadow-md cursor-pointer md:hover"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
          >Arjay Malaga</span>, 
          a versatile web developer with a design flair. Let's build something amazing together.
        </div>
        <div className="mt-5">
          <p className="font-inter font-extralight text-black text-[20px] dark:text-white">Follow me</p>
          <Socials/>  
        </div>
      </div>

      {isHovered && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 130, //adjust speed
            damping: 20
          }}
          className="hidden md:block absolute right-[250px] top-[180px] w-[400px] drop-shadow-lg"
        >
          <img
            src={myProfile}
            alt="Profile"
            className="w-full h-auto block dark:hidden"
          />
          <img
            src={myProfile_w}
            alt="Profile"
            className="w-full h-auto hidden dark:block"
          />
        </motion.div>
      )}
      
      {/* Bouncing ball div 
      <div style={{ marginRight: '30%' }} className="home__ball justify-center items-center mr-10">
        <div className="bouncing_ball"></div>
      </div>  */}
    </section>
  );
};

export default Hero;
