import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatue from "../utils/useOnlineStatue";

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

  const onlineStatus = useOnlineStatue();

  if (onlineStatus === false)
    return (
      <div>
        <h1>Opps!!! You Are Offline.</h1>
        <h1>Please Check-Out Your Internet Connection....</h1>
      </div>
    );

  // let listOfRestaurant = resList;
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="text-center mt-30%">
        <h1 className="font-['Dancing_Script',_cursive] text-slate-800 font-stretch-80% antialiased text-5xl mt-60 ">
          Fast delivery, fresh flavors
        </h1>
        <div className="mt-5">
          <input
            className="bg-white/70 space-y-1 backdrop-blur-xs  border-2 border-orange-600 w-1/3 mx-auto mt-5 rounded-full items-center justify-center gap-2 p-2 focus:outline-none pl-5"
            type="text"
            placeholder="Search...."
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />

          <button
            className="bg-orange-600 text-white px-4 py-2 rounded-full ml-2 "
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
            className="bg-orange-600 text-white px-4 py-2 rounded-full ml-2 "
            onClick={() => {
              const filteredTopRestaurant = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setfilteredRestaurant(filteredTopRestaurant);
              console.log(listOfRestaurant);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <h2 className="font-['Dancing_Script',cursive] text-center text-5xl mt-110 mb-5 text-slate-800">
        Bringing the restaurant home to you
      </h2>
      <div className="flex flex-wrap gap-10 justify-center mb-20">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="no-underline text-black"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
