"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/data";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-4xl font-bold text-center font-DancingS text-or dark:text-teal-500">
        Projets
        <hr className="w-6 h-1 mx-auto my-4 border-0 rounded bg-or dark:bg-teal-500"></hr>
      </h1>
      <div className="grid grid-cols-1 gap-10 mt-6 lg:grid-cols-2">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col items-center border-4 shadow-xl animate-slideUpCubiBezier animation-delay-2 md:flex-col md:space-x-12 border-or dark:border-teal-500 rounded-xl shadow-gray-800/50 dark:shadow-gray-500/50">
                  <div className=" md:w-full h-2/4">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt="project"
                        width={1000}
                        height={1000}
                        className="shadow-xl rounded-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="mb-6 text-3xl font-bold text-center font-DancingS md:text-4xl">
                      {project.name}
                    </h1>
                    <p className="mb-4 text-xl leading-7 text-center text-or dark:text-teal-500 font-DancingS md:text-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-row justify-center my-2 space-x-4 align-bottom">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="transition-transform cursor-pointer hover:-translate-y-1"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="transition-transform cursor-pointer hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
