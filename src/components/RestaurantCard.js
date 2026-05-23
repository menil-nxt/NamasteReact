import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="bg-white/70 space-y-1 backdrop-blur-xs border border-gray-200 font-apple-system rounded-4xl w-[280px] h-[480px] shadow-lg mt-20 font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="w-70 h-60 rounded-4xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="pl-4 mt-4 font-bold text-xl">{name}</h3>

      <h4 className="pl-4 mt-3">{cuisines.join(", ")}</h4>
      <h4 className="pl-4 mt-2">⭐️ {avgRating}</h4>
      <h4 className="pl-4 mt-2">{costForTwo}</h4>

      {/* <button className="get-items">GET</button> */}
    </div>
  );
};

export default RestaurantCard;
