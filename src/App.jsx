import { useState, useEffect, useRef } from "react";  
import styles from "./style";
import { Navbar, Hero, Background, Skills, Experience, FeaturedProjects, OtherProjects, Testimonials, Contact, Footer } from "./components";
import { animation } from "./style";

{/* Animation Revel On Scroll - START */}
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const onWindowScroll = () => {
          const element = ref.current;
          if (element) {
              const { top } = element.getBoundingClientRect();
              const isVisible = top < window.innerHeight;
              setIsVisible(isVisible);
          }
      };

      window.addEventListener("scroll", onWindowScroll);
      return () => {
          window.removeEventListener("scroll", onWindowScroll);
      };
  }, []);

  const classes = `transition-transform transition-opacity duration-1000
      ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

{/* Animation Revel On Scroll - END */}

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark"); // Remove "dark" class when switching to light mode
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    
    <div className={`${theme === "dark" ? "dark" : ""}`}>  
      <div className={`bg-white dark:bg-dark ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-white dark:bg-dark ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-white dark:bg-dark ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <RevealOnScroll>
            <Background />
          </RevealOnScroll>
          <RevealOnScroll>
            <Skills />
          </RevealOnScroll>
          <RevealOnScroll>
            <Experience />
          </RevealOnScroll>
          <RevealOnScroll>
            <FeaturedProjects />
          </RevealOnScroll>
          <RevealOnScroll>
            <OtherProjects />
          </RevealOnScroll>
          <RevealOnScroll>
            <Contact />
          </RevealOnScroll>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
