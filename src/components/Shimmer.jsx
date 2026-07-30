import React from "react";

const Shimmer = () => {
  return (
    <>
      {/* Shimmer Slogan */}
      <div className="animate-pulse flex flex-col items-center gap-3 mb-10 w-full mt-70">
        <div className="h-10 bg-gray-300 rounded-full w-120"></div>
      </div>

      {/* Shimmer Search Bar & Buttons */}
      <div className="animate-pulse flex flex-wrap items-center justify-center gap-4">
        {/* Search Bar Input */}
        <div className="w-100 h-12 bg-gray-200 border-2 border-gray-300 rounded-full"></div>

        {/* SEARCH Button */}
        <div className="w-24 h-12 bg-gray-300 rounded-full"></div>

        {/* Top Rated Restaurant Button */}
        <div className="w-48 h-12 bg-gray-300 rounded-full"></div>
      </div>

      {/* Shimmer Restaurant Cards */}
      <div className="flex flex-wrap gap-20 mt-75 justify-center">
        {/* Repeat this card block to simulate multiple loading cards */}
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-[330px] h-[450px] p-6 rounded-3xl bg-gray-50 shadow-md animate-pulse flex flex-col justify-between"
          >
            {/* Shimmer Image */}
            <div className="w-full h-52 bg-gray-300 rounded-2xl"></div>

            {/* Shimmer Content Container */}
            <div className="flex flex-col gap-4 mt-4 flex-grow">
              {/* Shimmer Restaurant Name */}
              <div className="h-7 bg-gray-300 rounded-md w-3/4"></div>

              {/* Shimmer Info (Cuisines / Rating) */}
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded-md w-1/4 mt-2"></div>
              </div>
            </div>

            {/* Shimmer Order / Price info */}
            <div className="h-5 bg-gray-300 rounded-md w-1/3 mt-4"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shimmer;
