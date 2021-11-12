import React from "react";

const SectionHeader = ({ shortTitle, title }) => {
  return (
    <div className="my-4">
      <h5 className="text-indigo-500 text-base font-medium text-center">
        {shortTitle}
      </h5>
      <h2 className="text-3xl font-bold text-center">{title}</h2>
      <div className="w-24 h-1.5 bg-indigo-500 rounded mx-auto my-2"></div>
    </div>
  );
};

export default SectionHeader;
