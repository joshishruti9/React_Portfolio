import React from "react";
import Projects from "./Projects";

const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between bg-neutral-950 py-6 px-8">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="Logo" className="mx-2 w-10" /> */}
        <a href="#hero" className="text-4xl font-kaushan">Shruti Joshi</a> 
      </div>

      <div className="flex justify-end space-x-4 pl-96">
        <a href="#about" className="text-xl leading-tight">About</a> 
         <a href="#technologies" className="text-xl leading-tight">Skills</a>
          <a href="#experience" className="text-xl">Experience</a>
          <a href="#projects" className="text-xl leading-tight">Projects</a>
          <a href="#contact" className="text-xl leading-tight">Contact</a>
      </div>
      
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        {/* Remove links from here, and add light dark mode   */}
        {/* <p>Light Mode/Dark Mode</p> */}
      </div>
    </nav>
  );
};

export default Navbar;
