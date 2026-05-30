import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import { MENU_API } from "../utils/constants";
import { useCart } from "../utils/CartContext";
// import useRastaurantMenu from "../utils/useRastaurantMenu";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setresMenu] = useState([]);
  const [toast, setToast] = useState("");

  const { resID } = useParams();

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };
  // const resInfo = useRastaurantMenu(resID);

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
    <div className="px-10 ">
      <h2 className="pb-1  text-2xl border-2 pt-4 px-4 border-black rounded-2xl flex justify-between">
        {title} - ({itemCards.length})
        <span className="ml-4 text-5xl font-extrabold text-gray-500 ">˄</span>
      </h2>
      <ul className="py-15">
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
  const { name, price, defaultPrice, description, imageId, id } =
    props?.menuInfo;
  const { addToCart, cartItems, updateQuantity } = useCart();
  const [msg, setMsg] = useState("");
  const RASTAURANT_MENU_IMG =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
  const halfIdx = description ? Math.floor(description.length / 2) : 0;
  const shortDesc = description ? description.slice(0, halfIdx) + "..." : "";

  const cartItem = cartItems.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAdd = () => {
    addToCart({ id, name, price, defaultPrice, imageId });
    setMsg("Item added to cart!");
    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <li className="px-7 flex justify-between mb-10 gap-10 bg-amber-50 rounded-2xl shadow-2xl py-5 ">
      <div className="space-y-2 flex-1 pt-9">
        <h5 className="text-lg font-medium ">{name}</h5>
        <p>
          {(price || defaultPrice) && (
            <span>Rs {((price || defaultPrice) / 100)?.toFixed(2)}</span>
          )}
        </p>
        <p className="text-gray-500 text-sm">{shortDesc}</p>
      </div>
      <div className="flex flex-col items-center gap-3 w-[200px]">
        <div className="w-[200px] h-[150px] rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
          {imageId && (
            <img
              src={RASTAURANT_MENU_IMG + imageId}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            ></img>
          )}
        </div>
        <div className="relative w-full">
          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2.5 rounded-xl transition-all shadow-md active:scale-95"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center justify-between w-full bg-white border border-orange-500 text-orange-500 font-bold py-1.5 rounded-xl shadow-md">
              <button
                onClick={() => updateQuantity(id, -1)}
                className="px-4 py-1 hover:bg-orange-50 transition-colors rounded-l-xl"
              >
                −
              </button>
              <span className="text-sm">{quantity}</span>
              <button
                onClick={() => updateQuantity(id, 1)}
                className="px-4 py-1 hover:bg-orange-50 transition-colors rounded-r-xl"
              >
                +
              </button>
            </div>
          )}
          {msg && (
            <p className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-green-600 font-semibold bg-white px-2 py-1 rounded shadow-sm">
              {msg}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default RestaurantMenu;
