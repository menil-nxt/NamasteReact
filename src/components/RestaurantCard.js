import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="bg-white/70 space-y-1 backdrop-blur-xs border border-gray-200 font-apple-system rounded-4xl w-[280px] h-[480px] shadow-lg mt-20 font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800/70 dark:text-white">
      <img
        className="w-70 h-60 rounded-4xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="pl-4 mt-4 font-bold text-xl text-black dark:text-white">
        {name}
      </h3>

      <h4 className="pl-4 mt-3 text-gray-800 dark:text-gray-200">
        {cuisines.join(", ")}
      </h4>
      <h4 className="pl-4 mt-2 text-gray-800 dark:text-gray-200">
        ⭐️ {avgRating}
      </h4>
      <h4 className="pl-4 mt-2 text-gray-800 dark:text-gray-200">
        {costForTwo}
      </h4>

      {/* <button className="get-items">GET</button> */}
    </div>
  );
};

// Higher Order Component

// input => restaurantCard => output => RestaurantCardPromoted

// withPromotedLabel is a higher order component
export const withPromotedLabel = (RestaurantCard) => {
  // taking restaurantCard as input
  return (props) => {
    // returning a new component with promoted label
    return (
      <div>
        <label className="text-white bg-black rounded-lg m-2 p-2">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
