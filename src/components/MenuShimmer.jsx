// PizzaRestaurantShimmer.jsx
const MenuShimmer = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 min-h-screen">
      {/* Background/Top Section Shimmer */}
      <div className=" h-48 md:h-64 lg:h-80 mb-8"></div>

      {/* Content Section */}
      <div className="w-full max-w-7xl bg-white p-6 md:p-8 rounded-3xl shadow-lg -mt-32 md:-mt-48 lg:-mt-64 relative">
        {/* Restaurant Title Shimmer */}
        <div className="h-10 bg-gray-300 animate-pulse rounded w-3/4 mb-4"></div>

        {/* Rating Section Shimmer */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-6 bg-gray-200 animate-pulse rounded w-24"></div>
          <div className="h-6 bg-gray-200 animate-pulse rounded w-16"></div>
        </div>

        {/* Address Shimmer */}
        <div className="h-5 bg-gray-200 animate-pulse rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 animate-pulse rounded w-1/3 mb-8"></div>

        {/* Search / Offer Box Shimmer */}
        <div className="h-12 bg-gray-100 animate-pulse rounded-full w-full mb-10"></div>

        {/* Menu List Shimmer */}
        <div className="space-y-8">
          {[...Array(5)].map(
            (
              _,
              index, // Simulate 5 menu items
            ) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6 animate-pulse"
              >
                <div className="flex flex-col space-y-2 w-full md:w-3/4">
                  {/* Food Title */}
                  <div className="h-7 bg-gray-300 rounded w-2/3"></div>
                  {/* Food Price */}
                  <div className="h-5 bg-gray-200 rounded w-1/4"></div>
                  {/* Food Description */}
                  <div className="h-4 bg-gray-100 rounded w-full"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                </div>
                {/* Food Image Shimmer */}
                <div className="w-32 h-32 md:w-24 md:h-24 bg-gray-200 rounded-lg mt-4 md:mt-0 md:ml-6 flex-shrink-0"></div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuShimmer;
