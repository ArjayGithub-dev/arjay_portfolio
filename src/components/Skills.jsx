import styles from "../style";
import { skills } from "../constants";


const Skills = () => (
<section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex w-64 flex-col justify-start mr-10">
        <p className={`${styles.sectionTitle} max-w-[550px]`}>
          SKILLS
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {skills.map((skill) => (
          <div key={skill.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-inter font-bold text-black text-[20px] leading-[30px] dark:text-white">
              {skill.title}
            </h4>
            <ul className="list-none mt-4 dark:text-white">
              {skill.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-inter font-extralight text-[17px] leading-[24px] text-black hover:text-blue dark:text-white ${
                    index !== skill.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>


    </div>
  </section>
);

export default Skills;