import React from "react";
import UniChat from "../assets/portfolio/UniChat.jpeg";
import airbnb from "../assets/portfolio/airbnb.jpeg";
import memoir from "../assets/portfolio/memoir.jpeg";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: airbnb,
      source_code_link: "https://github.com/iamhiteshverma/airbnb-clone" , 
      demo_code_link: "https://hitesh-airbnb-clone.vercel.app/"
    },
    {
      id: 2,
      src: memoir,
      source_code_link: "https://github.com/iamhiteshverma/memoir",
      demo_code_link: "https://memoir-blogs.vercel.app/"
    },
    {
      id: 3,
      src: UniChat,
      source_code_link: "https://github.com/iamhiteshverma/UniChat.git/" , 
      demo_code_link: "https://unichat-messanger.netlify.app/"
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , source_code_link, demo_code_link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => window.open(demo_code_link, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => window.open(source_code_link, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;