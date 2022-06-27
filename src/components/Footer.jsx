import React from "react";
import ssportfolio from "../assets/ssportfolio.png";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="bg-slate-800 md:px-20 px-5 py-5">
        <div className="flex justify-between items-center flex-wrap">
          <a href="/">
            <img src={ssportfolio} alt="" className="md:h-8 h-5" />
          </a>
          <div className="flex items-center">
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
        <div className="flex justify-center items-center mt-2">
          <p className="text-white mr-2">Email:</p>
          <p className="text-amber-400">sahasujit14@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
