import React from "react";

const Title = ({ title, desc }) => {
  return (
    <>
      <h2 className="text-3xl font-medium sm:text-5xl">{title}</h2>
      <p className="mb-6 max-w-lg text-center text-gray-500 dark:text-white/75">
        {desc}
      </p>
    </>
  );
};

export default Title;
