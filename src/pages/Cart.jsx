import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";

export default function Cart() {
  // Access the cart state from Redux store
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-page p-4 min-h-screen flex flex-col lg:flex-row gap-6">
      {/* Cart Items Section */}
      <div className="cart-items flex-1 p-4 mt-3">
        {cart.items && cart.items.length > 0 ? (
          cart.items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="flex items-center justify-center h-full text-center">
            <p className="text-gray-500 text-xl">
              Your cart is currently empty.
            </p>
          </div>
        )}
      </div>

      {/* Cart Summary Section */}
      {cart.items && cart.items.length > 0 && (
        <div className="flex justify-end mt-4 mb-10 text-xl p-3 lg:w-1/3 ">
          <div className="border rounded-lg p-4 h-[250px] bg-white   ">
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
