import styles from "../style";
import { experiences } from "../constants";
import { Developer } from "../assets";

const Experience = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex w-64 flex-col justify-start mr-10">
        <p className={`${styles.sectionTitle} max-w-[550px]`}>EXPERIENCES</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-col md:mt-0 mt-10 space-y-8">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col w-full md:w-auto">
              <h3 className="font-inter font-bold text-black text-[20px] dark:text-white">{experience.company}</h3>
              <p className="font-inter font-extralight text-[17px] text-black dark:text-white">{experience.position}</p>
            </div>
            <div className="font-inter font-extralight text-[17px] text-black md:text-right dark:text-white">
              <p>{experience.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* <a className="btn font-inter font-semibold text-[15px] mt-10" href={Developer} target="_blank">View My Resume</a> */}
  </section>
);

export default Experience;
