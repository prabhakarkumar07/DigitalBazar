import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navigation() {
  const cart = useSelector((state) => state.cart);
  const cartItemCount = cart.items.length;

  useEffect(() => {
    // Any side effects if needed when cart item count changes
  }, [cartItemCount]);

  return (
    <nav className="nav-container text-white p-2 box-border w-full fixed top-0 left-0 z-50 bg-blue-950 mb-6 ">
      <div className="mx-auto flex justify-between items-center p-2 max-w-6xl  ml-4 mr-4">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">
            Digital Bazar
          </Link>
        </div>
        {/* Navigation Items */}
        <div className="space-x-4 flex items-center text-xl">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/cart" className="relative hover:text-gray-300">
            Cart
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2  gridjustify-center bg-red-600 text-white text-xs rounded-full px-1.5">
              {cartItemCount}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
