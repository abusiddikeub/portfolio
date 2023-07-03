import React from "react";
import profile from '../assets/proflle logo.jpg'
import resume from '../../public/Abu siddik (4).pdf'
import { FaSortDown } from 'react-icons/fa';
import {Link, ScrollLink} from "react-scroll";

const Navbar = () => {
  const handleResume =()=>{
    console.log('resume')
  }
  return (

<div className="navbar sticky top-0  shadow-md max-w-[1240px] mx-auto justify-center h-full space-y-4 rounded-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52">
      {/* <li><a href="#banner">Home</a></li> */}
      <li>
        <Link
        activeClass="active"
        to="banner"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        
        >Home</Link>
      </li>

      <li>
        <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Features</Link>
      </li>

      <li>
        <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
        
        >Project</Link>
      </li>
      <li>
        <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Skills</Link>
      </li>
      <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <img src={profile} alt="" style={{height:'50px', width:'50px',borderRadius:'50%'}}/>
    <a className="btn btn-ghost normal-case text-xl text-white">Abu Siddik</a>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white ">

          <li>
        <Link
      //  activeClass="active"
        to="banner"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        
        >Home</Link>
      </li>

         <li>
        <Link
            // activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Features</Link>
      </li>

      <li>
        <Link
              // activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
        
        >Project</Link>
      </li>

      <li>
        <Link
            // activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >Skills</Link>
      </li>
      <li><a href="#contact">Contact</a></li>
     
    </ul>
  </div>
  <div className="navbar-end ">

    <a href={resume}
     download='resume.pdf'
     className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"> 
<span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span className="relative text-white">Resume </span>
</span>
</a>
  </div>
</div>

  );
};

export default Navbar;
