import styles from "../style";

const OtherProjects = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex w-64 flex-col justify-start mr-10">
        <p className={`${styles.sectionTitle}`}>BACKGROUND</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-col md:mt-0 mt-10 space-y-8">
      <p className={`${styles.paragraph2} dark:text-white`}>
        I have a degree in Computer Science, and during my studies, I developed my programming skills and gained practical experience in building websites. 
        Currently, I'm expanding my programming expertise by learning in-demand languages and frameworks through online courses and apply it by doing projects that make a positive impact on people's lives.
      </p>
   
      <p className={`${styles.paragraph2} dark:text-white`}>
        My goal is to become a fullstack developer where I build websites and applications that are scalable and efficient under the hood while providing engaging,
        pixel-perfect user experiences. When I'm not in front of my computer screen, I'm probably taking a nap, exercising, or crossing off another item on my bucket list.
      </p>
      </div>
    </div>
  </section>
);

export default OtherProjects;
