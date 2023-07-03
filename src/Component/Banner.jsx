import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import profile from "../assets/image.11.jpg";



const Banner = () => {
  const [text] = useTypewriter({
    words: ["professional coder.", "Full Stack Developer. "],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section id="banner" className="w-full pt-10 pb-20 flex flex-col lg:flex-row items-center max-w-[1240px] mx-auto justify-center h-full space-y-4 ">
      <div className="w-1/2 flex flex-col gap-10 ">
        <div className="flex flex-col gap-3 ">
          <h4 className="text-lg font-normal text-white">
            WELCOME TO MY WORLD
          </h4>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm
            <span className="text-red-400 capitalize">Abu sidik</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span className="text-green-300">{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#ff014f"
            ></Cursor>
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide text-white">
            I am experience in creating web-based projects using React Js,
            Express Js, MongoDB and Firebase. I am skilled at building things
            for the internet and enjoy bringing ideas to life on the web{" "}
          </p>
        </div>
        <div>
          {/* <h2 className="text-base uppercase font -titleFont mb-4 text-white">Find me in </h2> */}
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://www.facebook.com/abusiddik.antor/?mibextid=ZbWKwL"
                target="_blank"
              >
                <FaFacebook></FaFacebook>
              </a>
            </span>

            <span className="bannerIcon">
              <a href="https://instagram.com/abusiddikkpi" target="_blank">
                <FaInstagram></FaInstagram>
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/abusiddikeub" target="_blank">
                <FaGithub></FaGithub>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-auto m-auto shadow-md rounded-xl flex items-center justify-center p-4 hover:scale-110 transition-transform duration-200 ease-in">
        <img
          src={profile}
          width={400}
          height={400}
          className="rounded-xl ring ring-red-400"
          data-aos="zoom-in"
        ></img>
      </div>
    </section>
  );
};

export default Banner;
