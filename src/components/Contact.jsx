import styles from "../style";
import { shapes_design, shapes_design_w } from "../assets";

const Contact = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="flex w-full mb-8 flex-col items-center"> {/* Flex column on mobile, row on medium screens and up */}

      <div className="flex flex-col items-center md:w-3/4 md:justify-center">
        <img src={shapes_design} alt="Shapes Design" className="w-100 h-100 object-contain mb-10 block dark:hidden" />
        <img src={shapes_design_w} alt="Shapes Design" className="w-100 h-100 object-contain mb-10 hidden dark:block" />

        <p className="text-center font-inter text-gray text-[20px] mb-10 mt-10 dark:text-white"> {/* Centered text */}
          Want to start a project?
        </p>
        <h1 className="text-inter font-bold text-[126px] text-black dark:text-blue">Let's Talk!</h1>
        <a className="btn font-inter font-semibold text-[15px] mt-10" href="https://m.me/arjay.malaga22" target="_blank" rel="noopener noreferrer">CONTACT ME</a>
      </div>
    </div>
  </section>
);

export default Contact;
