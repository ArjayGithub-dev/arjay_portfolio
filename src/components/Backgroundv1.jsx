import { myProfile, myProfile_w } from "../assets";
import styles, { layout, animation } from "../style";

const Background = () => (
  <section id="background" className={layout.sectionReverse}>
  <div className={layout.sectionInfo}>
    <div>
    <p className={`${styles.sectionTitle} max-w-[550px] mt-5`}>BACKGROUND</p>
    </div>
      <p className={`${styles.paragraph2} max-w-[550px] mt-5 dark:text-white`}>
        I recently graduated with a bachelor's degree in Computer Science at Western Mindanao State University, Philippines. 
      </p>
      <p className={`${styles.paragraph2} max-w-[550px] mt-5 dark:text-white`}>
        During my studies, I developed my programming skills and gained practical experience in building websites. 
        My goal is to become a fullstack developer where I build websites and applications that are scalable and efficient under the hood while providing engaging,
        pixel-perfect user experiences.
      </p>
      <p className={`${styles.paragraph2} max-w-[550px] mt-5 dark:text-white`}>
       When I'm not in front of my computer screen, I'm probably taking a nap, exercising, or crossing off another item on my bucket list.
      </p>
    </div>

    <div className={layout.sectionImgReverse}>
      <img src={myProfile} alt="Arjay Malaga" className={`${animation.ease} block dark:hidden`} />
      <img src={myProfile_w} alt="Arjay Malaga" className={`${animation.ease} hidden dark:block`} />
    </div>

  </section>
);

export default Background;
