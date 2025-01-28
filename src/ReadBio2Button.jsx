import React from "react";

const ReadBioButton = ({ onClick, text, className }) => {
  return (
    <button
      className={`relative inline-flex items-center text-[#545454] w-fit group px-4 ${className}`}
      onClick={onClick}
    >
      <span
        className="absolute left-4 top-1/2 -translate-y-1/2 w-0 h-0 rounded-full bg-[#545454] group-hover:w-[calc(100%-32px)] group-hover:h-full group-hover:left-4 group-hover:rounded-full transition-all duration-300 ease-out"
        aria-hidden="true"
      />
      <span className="relative px-6 py-2 transition-colors duration-300 group-hover:text-[#e7e6e2]">
        {text}
      </span>
    </button>
  );
};

export default ReadBioButton;
