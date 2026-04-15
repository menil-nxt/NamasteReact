import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h1 className="slogen">Fast delivery, fresh flavors</h1>
        <div className="search-input">
          <input className="search-bar" type="text" placeholder="Search" />
          <button className="btn-search">SEARCH</button>
        </div>
      </div>
      <h2 className="explore">Bringing the restaurant home to you</h2>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
