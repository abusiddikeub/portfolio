import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import footer from "../assets/proflle logo.jpg";

const Footer = () => {
  return (
    <footer className="footer items-center text-neutral-content  max-w-[1240px] mx-auto flex flex-col justify-center h-full space-y-4">
      <div className="items-center grid-flow-col">
        <img
          src={footer}
          alt=""
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
        />
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      {/* <div className="flex items-center justify-between my-4 w-full sm:w-[89%]">
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
        <span>
<a href="https://www.facebook.com/abusiddik.antor/?mibextid=ZbWKwL" target="_blank">
  <FaFacebook></FaFacebook>
  </a>
</span>
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
        <span>
<a href="https://github.com/abusiddikeub" target="_blank">
  <FaGithub></FaGithub>
  </a>
</span>
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
        <span >
<a href="https://instagram.com/abusiddikkpi" target="_blank">
  <FaInstagram></FaInstagram>
  </a>
</span>
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaYoutube />
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
