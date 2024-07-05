import styles from "../style";
import { otherprojects } from "../constants";
import { open_link } from "../assets";

const OtherProjects = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex w-64 flex-col justify-start mr-10">
        <p className={`${styles.sectionTitle} max-w-[550px]`}>Other Projects</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-col md:mt-0 mt-10 space-y-8">
        {otherprojects.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col w-full md:w-auto">
              <h3 className="font-inter font-bold text-black text-[20px] dark:text-white flex items-center mb-3">
                {project.name}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2">
                  <img src={open_link} alt="open link" className="w-5 h-5 ml-5" />
                </a>
              </h3>
              <p className="font-inter font-extralight text-[17px] text-black dark:text-white">{project.content}</p>
              <div className="flex flex-wrap mt-5">
                {project.tools.map((tool, index) => (
                  <span key={index} className="font-inter font-semibold border border-blue text-blue px-2 py-1 m-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OtherProjects;
