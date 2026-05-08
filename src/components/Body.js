import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0240649&lng=72.60021069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    let json = await data.json();

    setListOfRestaurant(
      json?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes("restaurant_grid"),
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setfilteredRestaurant(
      json?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes("restaurant_grid"),
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  // let listOfRestaurant = resList;
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <h1 className="slogen">Fast delivery, fresh flavors</h1>
        <div className="search-input">
          <input
            className="search-bar"
            type="text"
            placeholder="Search...."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />

          <button
            className="btn-search"
            onClick={() => {
              console.log(searchText);
              // Filter the restaurant cards and Update the UI
              // Search Text
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            SEARCH
          </button>
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
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
