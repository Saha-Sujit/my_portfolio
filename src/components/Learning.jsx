import React from "react";
import { DiReact, DiMongodb } from "react-icons/di";
import { SiExpress, SiNodedotjs } from "react-icons/si";

function Learning() {
  return (
    <>
      <div className="md:mx-20 mx-5 md:my-16 my-10">
        <h1 className="text-white font-bold text-center md:text-4xl text-2xl">
          Currently Learning
        </h1>
        <div className="md:flex justify-center items-center">
          <div className="flex justify-center items-center border-amber-400 border-2 rounded-2xl p-2 md:mt-16 mt-10 w-full md:mr-10">
            <DiMongodb className="text-amber-400 text-6xl mr-5" />
            <h1 className="text-white text-2xl">MongoDb</h1>
          </div>
          <div className="flex justify-center items-center border-amber-400 border-2 rounded-2xl p-2 md:mt-16 mt-5 w-full md:ml-10">
            <SiExpress className="text-amber-400 text-6xl mr-5" />
            <h1 className="text-white text-2xl">Express Js</h1>
          </div>
        </div>
        <div className="md:flex justify-center items-center">
          <div className="flex justify-center items-center border-amber-400 border-2 rounded-2xl p-2 md:mt-16 mt-5 w-full md:mr-10">
            <DiReact className="text-amber-400 text-6xl mr-5" />
            <h1 className="text-white text-2xl">React Js</h1>
          </div>
          <div className="flex justify-center items-center border-amber-400 border-2 rounded-2xl p-2 md:mt-16 mt-5 w-full md:ml-10">
            <SiNodedotjs className="text-amber-400 text-6xl mr-5" />
            <h1 className="text-white text-2xl">Node Js</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learning;
