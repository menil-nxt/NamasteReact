const Shimmer = () => {
  return (
    <div className="body animate-pulse">
      <div className="text-center">
        {/* Shimmer Slogan */}
        <div className="flex justify-center mb-6 mt-60">
          <div className="h-[48px] bg-gray-300 rounded-full w-[400px]"></div>
        </div>

        {/* Shimmer Search Bar & Buttons */}
        <div className="mt-5 flex justify-center items-center gap-2">
          {/* Search Bar Input */}
          <div className="w-1/3 h-11 bg-gray-200 border-2 border-gray-300 rounded-full"></div>

          {/* SEARCH Button */}
          <div className="w-[100px] h-11 bg-gray-300 rounded-full ml-2"></div>

          {/* Top Rated Restaurant Button */}
          <div className="w-[180px] h-11 bg-gray-300 rounded-full ml-2"></div>
        </div>
      </div>

      {/* Shimmer H2 Slogan */}
      <div className="flex justify-center mt-[110px] mb-5">
        <div className="h-[48px] bg-gray-300 rounded-full w-[500px]"></div>
      </div>

      {/* Shimmer Restaurant Cards */}
      <div className="flex flex-wrap gap-10 justify-center mb-20">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl w-[280px] h-[450px] shadow-md mt-10"
          >
            {/* Shimmer Image */}
            <div className="w-full h-56 bg-gray-300 rounded-t-3xl"></div>

            {/* Shimmer Content Container */}
            <div className="p-4 space-y-4 mt-2">
              {/* Shimmer Restaurant Name */}
              <div className="h-7 bg-gray-300 rounded-md w-3/4"></div>

              {/* Shimmer Info (Cuisines / Rating) */}
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                <div className="h-4 bg-gray-200 rounded-md w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded-md w-1/2 mt-2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
