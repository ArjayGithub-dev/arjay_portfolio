import { useState, useEffect } from "react";  
import styles from "./style";
import { Navbar, Hero, Background, Skills, Experience, FeaturedProjects, Testimonials, Contact, Footer } from "./components";
import { animation } from "./style";

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
          <Background />
          <Skills />
          <Experience />
          <FeaturedProjects />
          {/*<Testimonials /> */}
          <Contact />
          <Footer />
        </div>
      </div>

    </div>
  );
}

export default App;
