import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="res-card-details">{name}</h3>

      <h4 className="res-card-details">{cuisines.join(", ")}</h4>
      <h4 className="res-card-details">⭐️ {avgRating}</h4>
      <h4 className="res-card-details">{costForTwo}</h4>

      {/* <button className="get-items">GET</button> */}
    </div>
  );
};

export default RestaurantCard;
