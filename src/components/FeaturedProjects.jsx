import styles, {animation} from "../style";
import { projects } from "../constants";

const FeaturedProjects = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="flex w-full mb-8 flex-col md:flex-row"> {/* Flex column on mobile, row on medium screens and up */}
      <div className="flex w-full md:w-1/4 mb-4 md:mb-0 md:justify-start md:mr-10 md:mb-10">
        <p className={`${styles.sectionTitle} max-w-[550px]`}>FEATURED PROJECTS</p>
      </div>
      <div className="flex flex-col w-full">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row mb-6">
            {/* Image above description on small screens */}
            <div className="flex flex-col md:flex-row md:items-center mt-10">
              <img style={{ width: '100%' }} src={project.img} alt={project.name} className={`${animation.ease} w-full md:w-1/2 h-auto object-contain mb-4 md:mb-0 mr-10`}/>
            </div>
            <div className={`flex flex-col md:ml-5`}>
              <h3 className="font-inter font-bold text-[20px] text-black mb-2 mt-10 ml-5 dark:text-white">{project.name}</h3>
              <p className="font-inter font-extralight text-[20px] text-black mb-2 w-5/6 ml-5 dark:text-white">{project.content}</p>
              <p className="font-inter font-extralight text-[20px] text-gray ml-5 dark:text-gray">Build with</p>
              <p className="font-inter font-extralight text-[20px] text-black mb-2 ml-5 dark:text-white">{project.tools}</p>
              <p className="font-inter font-bold text-[20px] text-blue mb-6 ml-5">{project.link}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
