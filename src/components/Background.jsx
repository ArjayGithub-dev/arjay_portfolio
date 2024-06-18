import { myProfile, myProfile_w } from "../assets";
import styles, { layout, animation } from "../style";

const Background = () => (
  <section id="background" className={layout.sectionReverse}>
  <div className={layout.sectionInfo}>
    <p className={`${styles.sectionTitle} max-w-[550px] mt-5`} >BACKGROUND</p>
      <p className={`${styles.paragraph1} max-w-[550px] mt-5 dark:text-white`}>
      I’m currently a freelance <span className="font-bold text-blue">Web Developer,</span> <br /> 
      I recently graduated with a bachelor's degree in Computer Science at Western Mindanao State University, Philippines. </p>
      <p className={`${styles.paragraph1} max-w-[550px] mt-5 dark:text-white`}>
      My goal is to always build websites and applications that are scalable and efficient under the hood while providing engaging,
      pixel-perfect user experiences. When I'm not in front of a computer screen, 
      I'm probably taking a nap, washing the dishes, or crossing off another item on my bucket list.
      </p>
    </div>

    <div className={layout.sectionImgReverse}>
      <img src={myProfile} alt="Arjay Malaga" className={`${animation.ease} block dark:hidden`} />
      <img src={myProfile_w} alt="Arjay Malaga" className={`${animation.ease} hidden dark:block`} />
    </div>

  </section>
);

export default Background;
