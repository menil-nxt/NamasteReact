import { useState } from "react";
import { useCart } from "../utils/CartContext";

export const MenuItem = (props) => {
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
