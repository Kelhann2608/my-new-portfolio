"use ckient";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center py-16 my-10 text-center animate-fadeIn animation-delay-2 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/Avatar2.png"
            alt="avatar"
            width={325}
            height={325}
            className="rounded-full shadow-2xl "
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-bold font-DancingS md:mt-0 md:text-6xl text-or dark:text-teal-500">
            Bernardin Milhet
          </h1>
          <p className="mt-4 mb-6 text-lg md:text-2xl font-DancingS">
            Je suis{" "}
            <span className="text-or dark:text-teal-500">
              Développeur Web et Web mobile.{" "}
            </span>
            Je vis à Anglet dans les Pyrénées Atlantiques, et j'adore la
            création de projet web et mobile.
          </p>
          {/* <Link
            to="projects"
            className="px-6 py-3 font-semibold rounded shadow text-or dark:text-teal-500 font-DancingS bg-or dark:bg-teal-600 hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projets
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
