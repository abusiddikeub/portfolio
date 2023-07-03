import React from "react";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";
import Features from "../Component/Features";
import Skills from "../Component/Skills";
import Project from "../Component/Project";
import Footer from "../Component/Footer";
import Contact from "../Component/Contact";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
     <Banner></Banner>
     {/* <div className="w-full  pb-20 flex items-center border-b-[1px]">
     </div> */}
      <Features></Features>
      {/* <div className="w-full  pb-20 flex items-center border-b-[1px]">
     </div> */}
     <Project></Project>
     {/* <div className="w-full   pb-20 flex items-center border-b-[1px]">
     </div> */}
     <Contact></Contact>
     {/* <div className="w-full   pb-20 flex items-center border-b-[1px]">
     </div> */}

      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
};

export default Home;
