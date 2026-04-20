import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  let [listOfRestaurant, setListOfRestaurant] = useState(resList);

  useEffect(() => {
    fatchData();
  }, []);

  const fatchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0240649&lng=72.60021069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    let json = await data.json();

    setListOfRestaurant(
      json?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes("restaurant_grid"),
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  // let listOfRestaurant = resList;
  return (
    <div className="body">
      <div className="search">
        <h1 className="slogen">Fast delivery, fresh flavors</h1>
        <div className="search-input">
          <input className="search-bar" type="text" placeholder="Search...." />
          <button className="btn-search">SEARCH</button>
          <button
            className="filter-btn"
            onClick={() => {
              listOfRestaurant = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setListOfRestaurant(listOfRestaurant);
              console.log(listOfRestaurant);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <h2 className="explore">Bringing the restaurant home to you</h2>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
