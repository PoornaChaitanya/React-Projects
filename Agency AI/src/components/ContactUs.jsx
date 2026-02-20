import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

function ContactUs() {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 py-30 text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid w-full max-w-2xl gap-3 sm:grid-cols-2 sm:gap-5"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
            <img src={assets.person_icon} alt="" />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600">
            <img src={assets.email_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            rows={8}
            name="message"
            placeholder="Enter your message"
            className="w-full rounded-lg border border-e-gray-300 p-3 text-sm outline-none dark:border-gray-600"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary flex w-max cursor-pointer gap-2 rounded-full px-8 py-2 text-sm text-white transition-all hover:scale-103"
        >
          Submit{" "}
          <img src={assets.arrow_icon} alt="arrow icon" className="w-4" />
        </button>
      </motion.form>
    </motion.div>
  );
}

export default ContactUs;
