import React from "react";

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="Logo" className="mx-2 w-10" /> */}
        <span className="text-4xl font-kaushan">Shruti Joshi</span>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        {/* Remove links from here, and add light dark mode   */}
        {/* <p>Light Mode/Dark Mode</p> */}
      </div>
    </nav>
  );
};

export default Navbar;
