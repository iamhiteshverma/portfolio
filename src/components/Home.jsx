import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col min-w-[70%] mt-20 justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hi,<br/>I'm Hitesh,<br/>A Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I'm a Web Developer with hands-on experience in designing & implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs & wireframes into high-quality code, and writing application interface code via Javascript and ReactJS workflows. Adept at monitoring & maintaining frontend and backend performance and troubleshooting & debugging the same to bolster overall performance.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;