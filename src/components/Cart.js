import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Body from "./Body";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  let navigate = useNavigate();
  // always subscribe smaller portion of the store - here we will only subscribe to the cart items instead of the whole store.
  // it reduce unnecessary re-rendering of the component when other parts of the store change.
  const cartItems = useSelector((store) => store.cart.items);

  // i don't want to subscribe to my whole store - naver-ever do this(naver use )

  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartTotal = cartItems.reduce((total, item) => {
    const price = item.menuInfo?.price || item.menuInfo?.defaultPrice || 0;
    return total + price / 100;
  }, 0);

  const RASTAURANT_MENU_IMG =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

  return (
    <div className="max-w-6xl mx-auto my-10 bg-white p-8 rounded-2xl shadow-xl apple-system">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Cart Items */}
        <div className="flex-1">
          <h2 className="text-3xl mb-8 font-bold text-gray-800">
            Shopping cart
          </h2>

          {cartItems.length === 0 ? (
            <>
              <p className="text-gray-500 text-lg">
                Your cart is empty. Add items to checkout!
              </p>
              <button
                className="bg-orange-500 text-white my-5 py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
                onClick={() => {
                  navigate("/");
                }}
              >
                Explore Menu
              </button>
            </>
          ) : (
            <div className="w-full">
              <div className="grid grid-cols-12 border-b border-gray-200 pb-4 mb-4 text-sm text-gray-500 font-semibold">
                <div className="col-span-8">Product</div>
                <div className="col-span-4 text-right">Price</div>
              </div>

              {cartItems.map((item, index) => {
                const info = item.menuInfo;
                const price = info?.price || info?.defaultPrice || 0;
                return (
                  <div
                    key={info?.id + "-" + index}
                    className="grid grid-cols-12 items-center border-b border-gray-100 py-6 text-sm"
                  >
                    <div className="col-span-2">
                      {info?.imageId ? (
                        <img
                          src={RASTAURANT_MENU_IMG + info.imageId}
                          className="w-16 h-16 object-cover rounded-xl shadow-sm"
                          alt={info?.name}
                        />
                      ) : (
                        <div className="w-16 h-16 bg-gray-100 rounded-xl shadow-sm"></div>
                      )}
                    </div>
                    <div className="col-span-6 pr-4">
                      <span className="text-gray-800 font-semibold text-base">
                        {info?.name}
                      </span>
                      <p className="text-gray-400 text-xs mt-1 line-clamp-2">
                        {info?.description}
                      </p>
                    </div>
                    <div className="col-span-4 text-right text-gray-800 font-medium text-base">
                      ₹{(price / 100).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Side: Cart Totals */}
        {cartItems.length > 0 && (
          <div className="w-full lg:w-[400px]">
            <h2 className="text-3xl mb-8 font-bold text-gray-800">
              Cart totals
            </h2>
            <div className="border border-gray-100 p-8 rounded-2xl bg-gray-50 shadow-sm">
              <div className="flex justify-between border-b border-gray-200 pb-4 mb-4 text-sm font-medium">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-800">₹{cartTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center mb-8 text-sm font-bold">
                <span className="text-gray-800 text-lg">Total</span>
                <span className="text-2xl text-gray-900">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <button className="w-full bg-orange-500 text-white py-4 rounded-xl text-base hover:bg-orange-600 transition-all font-bold shadow-md active:scale-95">
                  Place Order
                </button>
                <button
                  className="w-full border-2 border-gray-200 text-gray-600 py-3 rounded-xl text-sm hover:bg-gray-100 hover:text-black transition-all font-bold shadow-sm active:scale-95"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
