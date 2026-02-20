import React from "react";
import assets from "../assets/assets";

const Footer = ({ theme }) => {
  return (
    <div className="mt-20 bg-slate-50 px-4 pt-10 sm:mt-40 sm:px-10 sm:pt-10 lg:px-24 xl:px-40 dark:bg-gray-900">
      {/* footer top */}
      <div className="flex justify-between gap-10 max-lg:flex-col lg:items-center">
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-32 sm:w-44"
          />
          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex gap-8">
            <li>
              <a className="hover:text-primary" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#our-work">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="mt-2 mb-6 text-sm">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border border-gray-300 bg-transparent p-3 text-sm outline-none dark:border-gray-500 dark:text-gray-200"
            />
            <button className="bg-primary rounded px-6 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* footer bottom */}
      <div className="flex flex-wrap justify-center gap-4 pb-6 text-sm text-gray-500 sm:justify-between">
        <p>Copyright 2025 © AgencyAI - All Rights Reserved.</p>
        <div className="flex items-center justify-between gap-4">
          <img src={assets.facebook_icon} alt="facebook icon" />
          <img src={assets.twitter_icon} alt="twitter icon" />
          <img src={assets.instagram_icon} alt="instagram icon" />
          <img src={assets.linkedin_icon} alt="linkedin icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
