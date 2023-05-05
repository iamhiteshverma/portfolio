import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello World! I'm Hitesh Verma, a Web Developer ,I love combining the worlds of logic and creative design to make eye-catching, accessible, and user- friendly websites and applications.
        I've worked on many projects using various technologies such as Javascript, ReactJS, Tailwind CSS, Firebase, MongoDB. I've backend skills in NodeJS and ExpressJS, also worked on cloud technology such as AWS buckets and RESTAPI.
        </p>

        <br />

        <p className="text-xl">
        Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.
        <br/>
        I'm excited to make the leap and continue refining my skills with the right company. Drop me a line in the contact form below.
        </p>
      </div>
    </div>
  );
};

export default About;