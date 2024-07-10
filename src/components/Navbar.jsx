import React, { useState, useEffect } from 'react'

const Navbar = () => {
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

      


        <nav className=" w-full flex py-6 justify between items-center navbar">
            <h1 className="font-inter font-black text-black text-[40px] cursor-pointer dark:text-white">AM</h1>
            <div style={{ marginLeft: 'auto' }} className="cl-toggle-switch">
            <label className="cl-switch" >
                <input type="checkbox" onClick={handleThemeSwitch} />
                <span></span>
            </label>
            </div>
        </nav>
    )
}

export default Navbar