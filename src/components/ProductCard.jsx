import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../store/cartSlice";
import { calculateDiscount } from "../utils/discount";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.some((item) => item.id === product.id);

  // Calculate discounted price
  const discountedPrice = parseFloat(
    (product.price - calculateDiscount(product.price)).toFixed(2)
  );

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(addItemToCart(product));
      console.log("Item added to cart:", product);
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="group my-4 flex w-full max-w-xs flex-col mt-12 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ">
      <div className="h-[250px] bg-gray-200">
        <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
          <img
            className="peer absolute top-0 right-0 h-[80%] w-full object-cover transition-all duration-1000"
            src={product.thumbnail}
            alt={product.title}
          />
          <img
            className="peer absolute top-0 -right-96 h-[80%] w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
      </div>
      <div className="mt-2 px-3 pb-3">
        <p
          className="text-lg tracking-tight text-slate-900 truncate w-full text-center"
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textDecoration: "none",
          }}
        >
          {product.title}
        </p>

        <div className="mt-1 mb-3 flex items-center justify-between">
          <p className="w-full flex justify-center">
            <span className="text-xl font-bold text-slate-900">
              ${discountedPrice}
            </span>
            <span className="text-sm text-slate-900 line-through-important">
              ${product.price.toFixed(2)}
            </span>
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className={`flex items-center justify-center rounded-md px-4 py-2 text-center text-sm font-medium transition-colors w-full duration-300 ${
            isInCart ? "bg-gray-400" : "bg-slate-900 hover:bg-gray-700"
          } text-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {isInCart ? "View Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
