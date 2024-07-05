import { icon_github, icon_linkedin, icon_dribbble, icon_fb, icon_upwork, icon_tiktok, 
         icon_github_w, icon_linkedin_w, icon_dribbble_w, icon_fb_w, icon_upwork_w, icon_tiktok_w,
         icon_ig, icon_ig_w } from '../assets';
import styles from '../style';


const Socials = () => {
  return (
    <div className="flex flex-wrap mt-5"> 
      <a href="https://github.com/ArjayGithub-dev" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_github} alt="GitHub" className="w-5 h-5 block dark:hidden" />
        <img src={icon_github_w} alt="GitHub" className="w-5 h-5 hidden dark:block" />
      </a>
      <a href="https://www.linkedin.com/in/arjay-malaga-b5a891234/" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_linkedin} alt="LinkedIn" className="w-5 h-5 block dark:hidden" />
        <img src={icon_linkedin_w} alt="LinkedIn" className="w-5 h-5 hidden dark:block" />
      </a>
     <a href="https://dribbble.com/arjayfulldev" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_dribbble} alt="Dribbble" className="w-5 h-5 block dark:hidden" />
        <img src={icon_dribbble_w} alt="Dribbble" className="w-5 h-5 hidden dark:block" />
      </a>
       {/*<a href="https://www.upwork.com/freelancers/your-profile" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_upwork} alt="Upwork" className="w-5 h-5 block dark:hidden" />
        <img src={icon_upwork_w} alt="Upwork" className="w-5 h-5 hidden dark:block" />
      </a>*/}
      <a href="https://www.facebook.com/arjay.malaga22" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_fb} alt="Facebook" className="w-5 h-5 block dark:hidden" />
        <img src={icon_fb_w} alt="Facebook" className="w-5 h-5 hidden dark:block" />
      </a>
      <a href="https://www.instagram.com/rjy_ar/" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_ig} alt="Instagram" className="w-5 h-5 block dark:hidden" />
        <img src={icon_ig_w} alt="Instagram" className="w-5 h-5 hidden dark:block" />
      </a>
    </div>
  );
};

export default Socials;
