import { icon_github, icon_linkedin, icon_dribbble, icon_fb, icon_upwork, icon_tiktok, 
         icon_github_w, icon_linkedin_w, icon_dribbble_w, icon_fb_w, icon_upwork_w, icon_tiktok_w, } from '../assets';
import styles from '../style';


const Socials = () => {
  return (
    <div className="flex flex-wrap mt-5 space-x-4 ">
         <p className="font-inter font-extralight text-black text-[25px] dark:text-white">Follow me</p>
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_github} alt="GitHub" className="w-5 h-5 block dark:hidden" />
        <img src={icon_github_w} alt="GitHub" className="w-5 h-5 hidden dark:block" />
      </a>
      <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_linkedin} alt="LinkedIn" className="w-5 h-5 block dark:hidden" />
        <img src={icon_linkedin_w} alt="LinkedIn" className="w-5 h-5 hidden dark:block" />
      </a>
      <a href="https://dribbble.com/your-profile" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_dribbble} alt="Dribbble" className="w-5 h-5 block dark:hidden" />
        <img src={icon_dribbble_w} alt="Dribbble" className="w-5 h-5 hidden dark:block" />
      </a>
      <a href="https://www.upwork.com/freelancers/your-profile" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_upwork} alt="Upwork" className="w-5 h-5 block dark:hidden" />
        <img src={icon_upwork_w} alt="Upwork" className="w-5 h-5 hidden dark:block" />
      </a>
      <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_fb} alt="Facebook" className="w-5 h-5 block dark:hidden" />
        <img src={icon_fb_w} alt="Facebook" className="w-5 h-5 hidden dark:block" />
      </a>
      <a href="https://www.tiktok.com/@your-profile" target="_blank" rel="noopener noreferrer" className="icon-wrapper">
        <img src={icon_tiktok} alt="TikTok" className="w-5 h-5 block dark:hidden" />
        <img src={icon_tiktok_w} alt="TiTtok" className="w-5 h-5 hidden dark:block" />
      </a>
    </div>
  );
};

export default Socials;
