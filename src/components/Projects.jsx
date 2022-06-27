import React from "react";
import bprojects from "../data/Bprojects";

function Projects() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 md:py-24 py-12 mx-auto sm:px-10">
          <h1 className="text-white font-bold md:text-4xl text-2xl md:mb-20 mb-10 text-center">
            My Projects
          </h1>
          <div className="flex flex-wrap -m-4">
            {bprojects.map((bproject) => {
              return (
                <div className="p-4 md:w-1/3">
                  <div className="h-full border-2 border-amber-400 rounded-lg overflow-hidden">
                    <img
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                      src={bproject.image}
                      alt="blog"
                    />
                    <div className="p-6">
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {bproject.name}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {bproject.description}
                      </p>
                      <div className="flex items-center flex-wrap justify-between">
                        <a
                          href={bproject.github}
                          className="text-amber-400 inline-flex items-center md:mb-2 lg:mb-0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                        {bproject.website === "" ? (
                          ""
                        ) : (
                          <a
                            href={bproject.website}
                            className="text-amber-400 inline-flex items-center md:mb-2 lg:mb-0"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            See Demo
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
