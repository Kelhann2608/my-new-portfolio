import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="max-w-3xl px-4 mx-auto sm:px-6 md:max-w-5xl">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-or dark:bg-teal-500 border-0" />
      <div className="flex flex-col p-4 mx-auto text-center text-or dark:text-teal-500 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-xl text-or dark:text-teal-500">
          <span className="md:text-2xl">©️ {currentYear}</span>
          <span className="font-semibold font-DancingS text-or dark:text-teal-500 md:text-2xl">
            Bernardin Milhet
          </span>
        </div>
      </div>
    </footer>
  );
}
