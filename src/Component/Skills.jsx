import React from "react";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import {BiLogoMongodb, BiLogoTailwindCss} from "react-icons/bi"

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full space-y-4">
      <h2 className="text-4xl font-section text-green-300 inline px-8 pb-4 rounded-lg border-green-300 border-b-4">
          Skills
        </h2>
        <h1 className="text-5xl text-gray-300 font-bold capitalize">What I do </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex items-center justify-between w-full" data-aos="zoom-out-right">
              <div className="text-5xl ">
                <FaHtml5 className="text-orange-400" />
              </div>
              <h3 className="text-2xl text-white">HTML5</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300"  >
            <div className="flex items-center justify-between w-full" data-aos="zoom-in">
              <div className="text-5xl ">
                <FaCss3Alt className="text-[#379AD6]" />
              </div>
              <h3 className="text-2xl text-white">CSS3</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex items-center justify-between w-full" data-aos="zoom-in">
              <div className="text-5xl ">
                <BiLogoTailwindCss className="text-[#379AD6]" />
              </div>
              <h3 className="text-2xl text-white">Tailwind</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex items-center justify-between w-full" data-aos="zoom-in-down">
              <div className="text-5xl ">
                <FaBootstrap className="text-[#379AD6]" />
              </div>
              <h3 className="text-2xl text-white">Bootstrap</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex items-center justify-between w-full" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
              <div className="text-5xl ">
                <FaJsSquare className="text-[#F7DF1E]" />
              </div>
              <h3 className="text-2xl text-white">JAVASCRIPT</h3>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex items-center justify-between w-full" data-aos="zoom-out-up">
              <div className="text-5xl ">
                <FaReact className="text-[#379AD6]" />
              </div>
              <h3 className="text-2xl text-white">REACT JS</h3>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex items-center justify-between w-full" data-aos="zoom-in-right">
              <div className="text-5xl ">
                <FaNodeJs className="text-[#379AD6]" />
              </div>
              <h3 className="text-2xl text-white">Node Js</h3>
            </div>
          </div>
       
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex items-center justify-between w-full" data-aos="zoom-in-left">
              <div className="text-5xl ">
                <BiLogoMongodb className="text-[#379AD6]" />
              </div>
              <h3 className="text-2xl text-white">MongoDB</h3>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default Skills;
