import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import { MENU_API } from "../utils/constants";
import { useCart } from "../utils/CartContext";
import { ItemCategory, NastedItemCategory } from "./ItemCategory";
import { MenuItem } from "./MenuItem";
import useRastaurantMenu from "../utils/useRastaurantMenu";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setresMenu] = useState([]);
  const [toast, setToast] = useState("");

  const [showIndex, setShowIndex] = useState(0);
  const { resID } = useParams();

  // const resInfo = useRastaurantMenu(resID);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          MENU_API + resID + "&catalog_qa=undefined&submitAction=ENTER",
        );
        const json = await response.json();

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

        setResInfo(
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
    <div className="bg-white/70 space-y-1 backdrop-blur-xs mx-40 my-20 rounded-4xl apple-system shadow-lg p-10 relative">
      {toast && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-semibold">
          {toast}
        </div>
      )}
      <h1 className="text-2xl font-bold p-10 ">{name}</h1>
      <div className="pl-10 space-y-2 font-medium pb-10">
        <p>Rating : ⭐️ {avgRating}</p>
        <p>Locality : {locality}</p>
        <p>{areaName}</p>
        <p></p>
      </div>

      {/* {console.log(resMenu)} */}

      {/* Restaurant menu category */}
      {resMenu?.map((category, index) =>
        category?.type === "item" ? (
          <ItemCategory
            key={category?.title}
            data={category}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ) : (
          <NastedItemCategory
            key={category?.title}
            data={category}
            showItems={index === showIndex ? true : false}
          />
        ),
      )}
    </div>
  );
};
export default RestaurantMenu;
