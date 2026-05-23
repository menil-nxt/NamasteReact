import { Link, useNavigate } from "react-router";
import { useCart } from "../utils/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-lg p-12 text-center max-w-md">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Add items from a restaurant menu to get started!
          </p>
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Your Cart ({cartItems.length})
          </h1>
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:text-red-600 font-medium"
          >
            Clear All
          </button>
        </div>

        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 py-4">
              {item.imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/${item.imageId}`}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-800 truncate">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  Rs {((item.price || item.defaultPrice || 0) / 100).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  −
                </button>
                <span className="w-6 text-center font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  +
                </button>
              </div>
              <p className="w-20 text-right font-medium text-gray-800">
                Rs{" "}
                {(
                  ((item.price || item.defaultPrice || 0) / 100) *
                  item.quantity
                ).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500 transition-colors ml-2"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex items-center justify-between text-lg">
            <span className="font-semibold text-gray-800">Total</span>
            <span className="font-bold text-gray-800">
              Rs {(totalPrice / 100).toFixed(2)}
            </span>
          </div>
          <button
            onClick={() => navigate("/payment")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors mt-6"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
