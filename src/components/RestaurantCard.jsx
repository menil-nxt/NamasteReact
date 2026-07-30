import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl w-[280px] h-[450px] shadow-md mt-10 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-56 object-cover rounded-t-3xl"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4 space-y-1">
        <h3 className="font-bold text-xl truncate ">{name}</h3>

        <h4 className="text-gray-600 text-sm truncate ">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-gray-800 font-semibold ">⭐️ {avgRating}</h4>
        <h4 className="text-gray-700 text-sm ">{costForTwo}</h4>
      </div>
    </div>
  );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 z-10 text-white bg-black/80 text-xs px-2 py-1 rounded">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
