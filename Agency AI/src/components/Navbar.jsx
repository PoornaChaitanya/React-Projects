import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { easeOut, motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-20 flex items-center justify-between bg-white/50 px-4 py-4 font-medium backdrop-blur-xl sm:px-12 xl:px-40 dark:bg-gray-900/70"
    >
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="logo"
        className="w-32 sm:w-40"
      />

      <div
        className={`text-gray-700 sm:text-sm dark:text-white ${
          !sidebarOpen
            ? "overflow-hidden max-sm:w-0"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:bg-primary top-0 right-0 bottom-0 flex gap-5 transition-all max-sm:fixed max-sm:h-full max-sm:min-h-screen max-sm:flex-col max-sm:pt-20 max-sm:text-white sm:items-center`}
      >
        <img
          src={assets.close_icon}
          alt="close icon"
          className="absolute top-4 right-4 w-5 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />

        <a
          onClick={() => setSidebarOpen(false)}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        <a
          onClick={() => setSidebarOpen(false)}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="menu icon"
          onClick={() => setSidebarOpen(true)}
          className="w-8 sm:hidden"
        />

        <a
          href="#contact-us"
          className="bg-primary flex cursor-pointer items-center gap-2 rounded-full px-6 py-2 text-sm text-white transition-all hover:scale-110 max-sm:hidden"
        >
          Connect <img src={assets.arrow_icon} width={14} alt="right arrow" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
