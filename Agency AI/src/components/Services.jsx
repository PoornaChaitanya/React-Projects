import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutuins that Connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We help you buuld a strong media presence and engage with your audience.",
      icon: assets.ads_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 pt-30 text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="How can we help ?"
        desc="From strategy to execution,we craft digital solutions that move your business forward."
      />

      <div className="flex grid-cols-2 flex-col md:grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
