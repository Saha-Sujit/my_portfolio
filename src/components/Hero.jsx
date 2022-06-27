import React from "react";
import profilepic from "../assets/profilepic.png";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

function Hero() {
  return (
    <>
      <div className="flex justify-around items-center md:px-20 md:py-20 px-5 py-5 overflow-hidden flex-wrap">
        <div>
          <h2 className="md:text-3xl text-2xl md:text-left text-center text-amber-400 mb-2">
            Hello, I'm
          </h2>
          <h1 className="font-extrabold text-white pb-5 md:text-8xl text-6xl md:hover:text-9xl hover:text-7xl easy-linear duration-300 cursor-pointer md:text-left text-center">
            Sujit Saha
          </h1>
          <h3 className="md:text-2xl text-lg text-white md:mt-5 md:text-left text-center">
            Currently Learning Full Stack Web Development
          </h3>
          <div className="flex md:justify-start justify-center items-center md:mt-10 mt-3 mb-5">
            <a
              href="https://linkedin.com/in/sahasujit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="mr-2 text-amber-400 drop-shadow-2xl text-3xl hover:text-4xl transition-all" />
            </a>
            <a
              href="https://github.com/saha-sujit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="mr-2 text-amber-400 drop-shadow-2xl text-3xl hover:text-4xl transition-all" />
            </a>
            <a
              href="https://instagram.com/sahasujit14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="mr-2 text-amber-400 drop-shadow-2xl text-3xl hover:text-4xl transition-all" />
            </a>
            <a
              href="https://facebook.com/sujitsaha26/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook className="mr-2 text-amber-400 drop-shadow-2xl text-3xl hover:text-4xl transition-all" />
            </a>
          </div>
        </div>
        <div>
          <img
            src={profilepic}
            alt=""
            className="w-auto md:h-80 h-60 drop-shadow-lg border-amber-400 border-solid border-8 rounded-full md:hover:h-96 hover:h-80 easy-linear duration-300 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
