import React from "react";
import img from "../assets/image.11.jpg";
import { FaBeer, FaGithub, FaLink } from 'react-icons/fa';

const Project = () => {
  return (
    <div id="project" className=" w-full  border-b-[1px border-b-black]">
      <div className="text-center mb-20 ">
        <h2 className="text-4xl font-section text-green-300 inline px-8 pb-4 rounded-lg border-green-300 border-b-4">
          My Project
        </h2>
      </div>
      
      <div className="flex max-w-[1240px] mx-auto h-full space-y-4 rounded items-center justify-center">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 px-20">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="/src/assets/B.Food.jpg"
                alt=""
              ></img>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 p-10 gap-40">
            </div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0 ">
              <h1 className=" text-2xl font-bold text-white">
                Chef-Recipe
              </h1>
              <p className="mb-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className=" font-semibold">Technology</p>HTML, CSS,
                Tailwind, JavaScript, React, Node.js, MongoDB, Express.js,
                Firebase
              </p>
              <div className="flex items-center gap-3 ">
                <a href="https://github.com/abusiddikeub/Best-Chef" target="_blank">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#560aa7] to-green-600 hover:to-red-500  justify-center focus:outline-none hover:bg-gray-600">
                    <span>
                    </span>
                    <FaGithub></FaGithub> GitHub
                    
                  </button>

                </a>
                <a href="https://assignment-fccfc.web.app/" target="_blank">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#560aa7] to-green-600 hover:to-red-500  justify-center focus:outline-none hover:bg-gray-600">
                    <span>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 576 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                      </svg>
                    </span>
                    <FaLink></FaLink> Live Site 
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Toy MarketPlace */}
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="/src/assets/Toy Car.jpg"
                alt=""
              ></img>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className=" text-2xl font-bold text-white">
                Toy Marketplace
              </h1>
              <p className="mb-3 italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className=" font-semibold">Technology</p>HTML, CSS,
                Tailwind, JavaScript, React, Node.js, MongoDB, Express.js,
                Firebase
              </p>
              <div className="flex items-center gap-3">
                <a href="https://github.com/abusiddikeub/Toy-car" target="_blank">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#560aa7] to-green-600 hover:to-red-500  justify-center focus:outline-none hover:bg-gray-600">
                    <span>
                    </span>
                    <FaGithub></FaGithub> GitHub
                  </button>
                </a>

                <a href="https://assignment-11-ab776.web.app/" target="_blank">

                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#560aa7] to-green-600 hover:to-red-500  justify-center focus:outline-none hover:bg-gray-600">
                    <span>
                    </span>
                    <FaLink></FaLink> Live Site
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="/src/assets/Nirvana Yoga.jpg"
                alt=""
              ></img>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center  text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-2xl font-bold text-white">
              Nirvana Yoga
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-semibold">Technology:</p>HTML, CSS,
                Tailwind, JavaScript, React, Node.js, MongoDB, Express.js,
                Firebase, Stripe, JWT, React Hook Form
              </p>
              <div className="flex items-center gap-3">
                <a href="https://github.com/abusiddikeub/summer-camp" target="_blank">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#560aa7] to-green-600 hover:to-red-500  justify-center focus:outline-none hover:bg-gray-600">
                    <span>
                    </span>
                    <FaGithub></FaGithub> GitHub
                  </button>
                </a>
                <a href="https://assignment-12-34598.web.app/" target="_blank">
                  <button className="flex items-center gap-3 rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 bg-gradient-to-r from-[#560aa7] to-green-600 hover:to-red-500  justify-center focus:outline-none hover:bg-gray-600">
                    <span>
                    </span>
                    <FaLink></FaLink> Live Site
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Project;
