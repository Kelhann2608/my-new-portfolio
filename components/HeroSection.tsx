"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

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
          <div className="flex flex-row items-center justify-center mb-1 space-x-2">
            <a
              href="https://github.com/Kelhann2608"
              aria-label="lien github"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub
                className="transition-transform cursor-pointer hover:-translate-y-1 text-or dark:text-teal-500"
                size={50}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/bernardin-milhet-a590b1149/"
              aria-label="lien linkedin"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="transition-transform cursor-pointer hover:-translate-y-1 text-or dark:text-teal-500"
                size={50}
              />
            </a>
            <a
              href="mailto:bernardin2608@gmail.com"
              aria-label="adresse email"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineMail
                className="transition-transform cursor-pointer hover:-translate-y-1 text-or dark:text-teal-500"
                size={50}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
