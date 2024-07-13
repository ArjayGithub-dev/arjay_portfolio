import styles, { animation } from "../style";
import { projects } from "../constants";
import { open_link } from "../assets";

const FeaturedProjects = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="flex w-full mb-8 flex-col md:flex-row"> {/* Flex column on mobile, row on medium screens and up */}
      <div className="flex w-full md:w-1/4 mb-4 md:justify-start md:mr-10 md:mb-10">
        <p className={`${styles.sectionTitle} max-w-[550px]`}>FEATURED PROJECTS</p>
      </div>
      <div className="flex flex-col w-full">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row mb-6">
            {/* Image above description on small screens */}
            <div className="flex flex-col md:flex-row md:items-center mt-10">
              <img
                style={{ width: '100%' }}
                src={project.img}
                alt={project.name}
                className={`${animation.ease} w-full md:w-1/2 h-auto object-contain mb-4 md:mb-0 mr-10`}
              />
            </div>
            <div className={`flex flex-col md:ml-5`}>

            <h3 className="font-inter font-bold text-[20px] text-black mb-2 mt-10 ml-5 dark:text-white">
              {project.name}
              {project.link2 && (
                <a href={project.link2} target="_blank" rel="noopener noreferrer" className="ml-2">
                  <img src={open_link} alt="open link" className="w-5 h-5 inline-block align-middle ml-5" />
                </a>
              )}
            </h3>

              <p className="font-inter font-extralight text-[20px] text-black mb-2 w-5/6 ml-5 dark:text-white">
                {project.content}
              </p>
              <p className="font-inter font-extralight text-[20px] text-black mb-2 w-5/6 ml-5 dark:text-white">
                Role: {project.role}
              </p>
              <div className="flex flex-wrap mt-5 mb-5 ml-4">
                {project.tools.map((tool, index) => (
                  <span key={index} className="font-inter font-semibold border border-blue text-blue px-2 py-1 m-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
              {project.link && (
                <p className="font-inter font-bold text-[15px] text-blue mb-6 ml-5">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Github Repository</a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
