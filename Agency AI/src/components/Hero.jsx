import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex w-full flex-col items-center gap-6 overflow-hidden px-4 py-20 text-center text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 p-1.5 pr-4">
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </div>

      <h1 className="max-w-5xl text-4xl font-medium sm:text-5xl md:text-6xl xl:text-[84px] xl:leading-[95px]">
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </h1>

      <p className="max-w-4/5 pb-3 text-sm font-medium text-gray-500 sm:max-w-lg sm:text-lg dark:text-white/75">
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </p>

      <div className="relative">
        <img
          src={assets.hero_img}
          alt="woman using laptop"
          className="w-full max-w-6xl"
        />
        <img
          src={assets.bgImage1}
          alt="background blur"
          className="absolute -top-40 -right-40 -z-1 sm:-top-100 sm:-right-70 dark:hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
