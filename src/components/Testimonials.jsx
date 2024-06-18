import styles from "../style";
import { testimonials } from "../constants";
import { people01, people02, people03 } from '../assets';

const Testimonials = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="flex w-full mb-8 flex-col md:flex-row"> {/* Flex column on mobile, row on medium screens and up */}
      <div className="flex w-full md:w-1/4 mb-4 md:mb-0 md:justify-start md:mr-10 md:mb-10">
        <p className={`${styles.sectionTitle} max-w-[550px]`}>TESTIMONIALS</p>
      </div>

      
    </div>
  </section>
);

export default Testimonials