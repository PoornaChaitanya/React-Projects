import React from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex w-full flex-col items-center gap-6 overflow-hidden px-4 py-20 text-center text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 rounded-full border border-gray-300 p-1.5 pr-4"
      >
        <img className="w-20" src={assets.group_profile} alt="" />
        <p className="text-xs font-medium">Trusted by 10k+ people</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl text-4xl font-medium sm:text-5xl md:text-6xl xl:text-[84px] xl:leading-[95px]"
      >
        Turning imagination into{" "}
        <span className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent">
          digital
        </span>{" "}
        impact.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="max-w-4/5 pb-3 text-sm font-medium text-gray-500 sm:max-w-lg sm:text-lg dark:text-white/75"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        viewport={{ once: true }}
        className="relative"
      >
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
      </motion.div>
    </div>
  );
};

export default Hero;
