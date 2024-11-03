import React, { useState } from 'react';
import styles from "../style";
import { experiences } from "../constants";
import { Developer } from "../assets";

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex w-64 flex-col justify-start mr-10">
          <p className={`${styles.sectionTitle} max-w-[550px]`}>EXPERIENCES</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-col md:mt-0 mt-10 space-y-8">
          {displayedExperiences.map((experience, index) => (
            <div key={experience.id} className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col w-full md:w-auto">
                <h3 className="font-inter font-bold text-black text-[20px] dark:text-white">{experience.company}</h3>
                <p className="font-inter font-extralight text-[17px] text-black dark:text-white">{experience.position}</p>
                {/* <p className="font-inter font-extralight text-[14px] text-black dark:text-white">{experience.description}</p> */}
              </div>
              <div className="font-inter font-extralight text-[17px] text-black md:text-right dark:text-white">
                <p>{experience.date}</p>
              </div>
            </div>
          ))}
          {!showAll && experiences.length > 2 && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-black h-full w-full"></div>
              <p 
                className="font-inter font-semibold text-[15px] mt-10 text-center relative z-10 cursor-pointer" 
                onClick={() => setShowAll(true)}
              >
                Show more
              </p>
            </div>
          )}
          {showAll && (
            <p 
              className="font-inter font-semibold text-[15px] mt-10 text-center cursor-pointer" 
              onClick={() => setShowAll(false)}
            >
              Show less
            </p>
          )}
        </div>
      </div>
      {/* <a className="btn font-inter font-semibold text-[15px] mt-10" href={Developer} target="_blank">View My Resume</a> */}
    </section>
  );
};

export default Experience;