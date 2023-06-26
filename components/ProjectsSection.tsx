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
      <div className="flex flex-row flex-wrap gap-10 mt-6">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
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
                    <h1 className="mb-6 text-4xl font-bold font-DancingS">
                      {project.name}
                    </h1>
                    <p className="mb-4 text-2xl leading-7 text-or dark:text-teal-500 font-DancingS">
                      {project.description}
                    </p>
                    <div className="flex flex-row space-x-4 align-bottom">
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
