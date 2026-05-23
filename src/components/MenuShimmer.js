const MenuShimmer = () => {
  return (
    <div className="animate-pulse max-w-4xl mx-auto p-6">
      {/* Restaurant Header */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="h-8 bg-gray-300 rounded-lg w-72"></div>
        <div className="flex gap-4">
          <div className="h-5 bg-gray-200 rounded w-20"></div>
          <div className="h-5 bg-gray-200 rounded w-16"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-48"></div>
        <div className="h-4 bg-gray-200 rounded w-36"></div>
      </div>

      {/* Search Box */}
      <div className="h-12 bg-gray-200 rounded-full w-full mb-8"></div>

      {/* Menu Items */}
      <div className="flex flex-col gap-6">
        {[1, 2].map((item) => (
          <div key={item} className="flex gap-4 p-4 border-b border-gray-200">
            <div className="flex-1 flex flex-col gap-3">
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
            <div className="w-[120px] h-[120px] bg-gray-300 rounded-xl flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuShimmer;
