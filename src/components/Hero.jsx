import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/main.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Shruti Joshi
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-lg">
              {HERO_CONTENT}
            </p>
            <div className="m-8 flex item-center justify-center gap-8 text-4xl cursor-pointer">
              <a
                href="https://www.linkedin.com/in/shruti-joshi-44177817b/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/joshishruti9" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="w-full lg:w-1/3 lg:p-8 md:w-1/2"> */}
        <div className="w-full lg:w-1/2 lg:p-4 ">
          <div className="flex justify-center items-center">
            <img src={profilePic} alt="Profile Pic" className="w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
