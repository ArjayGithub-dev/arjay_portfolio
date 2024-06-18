import styles, { layout } from '../style';
import Socials from './Socials'; // Adjust the file extension (.jsx or .tsx) as per your setup

const Hero = () => (
  <section id="home"  className={`flex md:flex-row flex-col md:ml-20 md:mt-10 ml-0 mt-0 ${styles.paddingY} ${layout.sectionReverse}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* First div with "Hello people" */}
      <div className="text-[20px] font-inter text-gray font-bold dark:text-white">
        Hello people!
      </div>

      {/* Second div with developer intro */}
      <div className="font-inter font-extralight ss:text-[50px] text-[35px] max-w-[670px] dark:text-white">
        I’m <span className="text-blue font-bold drop-shadow-md">Arjay Malaga</span>, 
        a versatile web developer with a design flair. Let's build something amazing together.
      </div>
      <div className="mt-5">
      <Socials/>  
      </div>
    </div>
    

    {/* Bouncing ball div */} 
    <div style={{ marginRight: '25%' }} className="home__ball justify-center items-center mr-10">
      <div className="bouncing_ball"></div>
    </div>

  </section>
);

export default Hero;
