import { useSelector } from "react-redux";
import { calculateDiscount } from "../utils/discount";

const CartSummary = () => {
  const cart = useSelector((state) => state.cart);
  const subtotal = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = calculateDiscount(subtotal);
  const total = subtotal - discount;

  return (
    <div className="cart-summary p-4  ">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="text-sm">
        <h2>Subtotal: {subtotal.toFixed(2)} $</h2>
        <h2>Discount: {discount.toFixed(2)} $</h2>
        <h2>Total: {total.toFixed(2)} $</h2>
      </div>
    </div>
  );
};

export default CartSummary;
