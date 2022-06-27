import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ssportfolio from "../assets/ssportfolio.png";
import Hero from "./Hero";
import Learning from "./Learning";
import Projects from "./Projects";

function Header() {
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="md:flex md:justify-between md:items-center md:py-5 md:px-20 md:bg-slate-800 md:drop-shadow-2xl md:overflow-hidden hidden sticky top-0 z-50">
        <a href="/">
          <img src={ssportfolio} alt="" className="h-8 cursor-pointer" />
        </a>
        <div>
          <ul className="flex text-white">
            <li className="px-5 rounded-2xl cursor-pointer p-2 hover:bg-slate-600 mr-2">
              <a href="#about">ABOUT</a>
            </li>
            <li className="px-5 rounded-2xl cursor-pointer p-2 hover:bg-slate-600 mr-2">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="px-5 rounded-2xl cursor-pointer p-2 hover:bg-slate-600 mr-2">
              <a href="#learning">LEARNING</a>
            </li>
            <li className="px-5 rounded-2xl cursor-pointer p-2 hover:bg-slate-600 mr-2">
              CONTACT
            </li>
            <li className="px-5 rounded-2xl cursor-pointer p-2 hover:bg-slate-600 border-amber-400 border-solid border-2 mr-2">
              <a
                href="https://github.com/saha-sujit"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </li>
            <li className="px-5 rounded-2xl cursor-pointer p-2 hover:bg-slate-600 border-amber-400 border-solid border-2 mr-2">
              <a
                href="https://linkedin.com/in/sahasujit"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-5 px-5 bg-slate-800 drop-shadow-2xl overflow-hidden md:hidden sticky top-0 z-50">
        <div className="flex justify-between">
          <a href="/">
            <img src={ssportfolio} alt="" className="h-5 cursor-pointer" />
          </a>
          {!nav ? (
            <GiHamburgerMenu
              onClick={() => setNav(true)}
              className="text-white text-xl"
            />
          ) : (
            <IoMdClose
              onClick={() => setNav(false)}
              className="text-white text-xl"
            />
          )}
        </div>
        {!nav ? (
          <div></div>
        ) : (
          <div>
            <ul className="text-white mt-3">
              <li
                onClick={() => setNav(false)}
                className="mt-2 rounded-2xl cursor-pointer p-2 hover:bg-slate-600"
              >
                <a href="#about" className="block w-auto">
                  ABOUT
                </a>
              </li>
              <li
                onClick={() => setNav(false)}
                className="mt-2 rounded-2xl cursor-pointer p-2 hover:bg-slate-600"
              >
                <a href="#projects" className="block w-auto">
                  PROJECTS
                </a>
              </li>
              <li
                onClick={() => setNav(false)}
                className="mt-2 rounded-2xl cursor-pointer p-2 hover:bg-slate-600"
              >
                <a href="#learning" className="block w-auto">
                  LEARNING
                </a>
              </li>
              <li className="mt-2 rounded-2xl cursor-pointer p-2 hover:bg-slate-600">
                CONTACT
              </li>
              <li className="mt-2 rounded-2xl cursor-pointer p-2 hover:bg-slate-600 border-amber-400 border-solid border-2">
                <a
                  href="https://github.com/saha-sujit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-auto"
                >
                  GITHUB
                </a>
              </li>
              <li className="mt-2 rounded-2xl cursor-pointer p-2 hover:bg-slate-600 border-amber-400 border-solid border-2">
                <a
                  href="https://linkedin.com/in/sahasujit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-auto"
                >
                  LINKEDIN
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div id="about">
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="learning">
        <Learning />
      </div>
    </>
  );
}

export default Header;
