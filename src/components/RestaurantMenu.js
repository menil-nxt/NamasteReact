import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setReaInfo] = useState(null);
  const [resMenu, setresMenu] = useState([]);

  const { resID } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          MENU_API + resID + "&catalog_qa=undefined&submitAction=ENTER",
        );
        const json = await response.json();
        console.log(json);
        const menuData = json?.data?.cards
          ?.find((obj) => obj?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (obj) =>
              obj?.card?.card["@type"]?.includes("ItemCategory") ||
              obj?.card?.card["@type"]?.includes("NestedItemCategory"),
          );

        const organisedMenuData = menuData?.map((item) => {
          const type = item?.card?.card["@type"];
          const title = item?.card?.card?.title;
          const itemCards = item?.card?.card?.itemCards || [];
          const category = item?.card?.card?.category || [];

          // console.log(category);

          if (type?.includes("NestedItemCategory")) {
            return {
              title,
              type: "nested",
              category: category?.map((subcategory) => {
                return {
                  title: subcategory?.title,
                  itemCards: subcategory?.itemCards,
                };
              }),
            };
          } else {
            return {
              title,
              type: "item",
              itemCards,
            };
          }
        });
        setresMenu(organisedMenuData);

        setReaInfo(
          json?.data?.cards?.find((item) =>
            item?.card?.card?.["@type"]?.includes("food.v2.Restaurant"),
          )?.card?.card?.info,
        );
      } catch (err) {
        console.log(err);
      }
    };

    fetchMenu();
  }, []);

  if (resInfo === null) return <MenuShimmer />;

  const { name, avgRating, locality, areaName, imageId } = resInfo;
  return (
    <div className="menu">
      <h1 className="Res-menu-name">{name}</h1>
      <p>Rating : ⭐️ {avgRating}</p>
      <p>Locality : {locality}</p>
      <p>{areaName}</p>
      <p></p>
      <img src={imageId}></img>

      {/* Restaurant menu category */}
      {resMenu?.map((category) =>
        category?.type === "item" ? (
          <ItemCategory key={category?.title} data={category} />
        ) : (
          <NastedItemCategory key={category?.title} data={category} />
        ),
      )}
    </div>
  );
};

const ItemCategory = (props) => {
  console.log(props);
  const { title, itemCards } = props?.data;

  return (
    <div>
      <h2 className="header-title">{title}</h2>
      <ul className="res-menu-list">
        {itemCards?.map((item) => (
          <MenuItem menuInfo={item?.card?.info} key={item?.card?.info?.id} />
        ))}
      </ul>
    </div>
  );
};
const NastedItemCategory = (props) => {
  return <div></div>;
};

const MenuItem = (props) => {
  const { name, price, defaultPrice, description, imageId } = props?.menuInfo;
  const RASTAURANT_MENU_IMG =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  return (
    <li className="list-items">
      <div className="list-info">
        <h5>{name}</h5>
        <p>{price && <span>Rs {(price / 100)?.toFixed(2)}</span>}</p>
        <p>
          {defaultPrice && <span>Rs {(defaultPrice / 100)?.toFixed(2)}</span>}
        </p>
        <p className="item-discription">{description}</p>
      </div>
      <div className="list-img">
        {imageId && <img src={RASTAURANT_MENU_IMG + imageId}></img>}
      </div>
    </li>
  );
};

export default RestaurantMenu;
