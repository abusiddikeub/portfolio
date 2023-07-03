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
    </footer>
  );
};

export default Footer;
