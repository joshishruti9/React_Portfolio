import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Get in Touch</h2>
      <div className="my-5 flex justify-center items-center border-neutral-300 rounded flex-col text-sm sm:text-base md:text-lg text-purple-300 ">
        <p>Shruti Joshi</p>
        <p>Seattle University</p>
        <p>12th Ave Seattle, WA, USA</p>
        <a href="mailto:sjoshi2@seattleu.edu">sjoshi2@seattleu.edu</a>
        <div className="m-4 flex item-start justify-center gap-8 text-2xl cursor-pointer">
          <a href="https://www.linkedin.com/in/shruti-joshi-44177817b/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/joshishruti9" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
