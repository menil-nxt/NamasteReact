const MenuShimmer = () => {
  return (
    <div className="bg-white/70 space-y-1 backdrop-blur-xs mx-40 my-20 rounded-4xl apple-system shadow-lg p-10 relative animate-pulse">
      {/* Restaurant Title Shimmer */}
      <div className="p-10">
        <div className="h-8 bg-gray-300 rounded w-1/3"></div>
      </div>

      {/* Restaurant Info Shimmer */}
      <div className="pl-10 space-y-3 font-medium pb-10">
        <div className="h-4 bg-gray-200 rounded w-24"></div>
        <div className="h-4 bg-gray-200 rounded w-32"></div>
        <div className="h-4 bg-gray-200 rounded w-40"></div>
      </div>

      {/* Menu Categories Shimmer */}
      <div className="space-y-6 mt-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="px-10">
            <div className="h-16 bg-gray-200 border-2 border-gray-300 rounded-2xl flex justify-between items-center px-4">
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              <div className="h-6 bg-gray-300 rounded w-8"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuShimmer;
