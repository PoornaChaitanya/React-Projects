import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
import { motion } from "motion/react";

const Teams = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-7 px-4 pt-30 text-gray-800 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A passionate team of digital experts dedicated to your brands success."
      />

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
        {teamData.map((team, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            key={index}
            className="flex items-center gap-5 rounded-xl border border-gray-100 bg-white p-4 shadow-xl shadow-gray-100 transition-all duration-400 hover:scale-103 max-sm:flex-col dark:border-gray-700 dark:bg-gray-900 dark:shadow-white/5"
          >
            <img
              src={team.image}
              alt="person image"
              className="h-12 w-12 rounded-full"
            />
            <div className="flex-1">
              <h3 className="text-sm font-bold">{team.name}</h3>
              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
