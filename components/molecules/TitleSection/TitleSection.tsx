import React from "react";

const TitleSection = ({
  label,
  isCenter = false,
}: {
  label: string;
  isCenter?: boolean;
}) => {
  if (isCenter) {
    return (
      <div className="relative flex justify-center my-12 ">
        <h2 className="text-4xl inline-block font-semibold relative z-10 text-slate-800">
          {label}{" "}
        </h2>
        <div className="absolute h-10 w-[50vw] mx-auto bg-peach-500 top-4 left-5 right-5 z-0"></div>
      </div>
    );
  }
  return (
    <div className="relative inline-block my-12">
      <h2 className="text-4xl inline-block font-semibold relative z-10 text-slate-800">
        {label}{" "}
      </h2>
      <div className="absolute h-10 w-full bg-peach-500 top-4 left-5 z-0"></div>
    </div>
  );
};

export default TitleSection;
