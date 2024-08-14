import { useDispatch } from "react-redux";
import { removeItemFromCart, updateQuantity } from "../store/cartSlice";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Handler to remove the item from the cart
  const removeItem = () => {
    dispatch(removeItemFromCart(item.id));
  };

  // Handler to update the item's quantity
  const changeQuantity = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 6) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  // Increment quantity
  const incrementQuantity = () => {
    if (item.quantity < 6) {
      changeQuantity(item.quantity + 1);
    }
  };

  // Decrement quantity
  const decrementQuantity = () => {
    if (item.quantity > 1) {
      changeQuantity(item.quantity - 1);
    }
  };

  return (
    <div className="cart-item flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="relative w-20 h-20 overflow-hidden rounded-md">
        <img
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-150"
          src={item.thumbnail}
          alt={item.title}
        />
      </div>
      <h2 className="font-semibold text-sm">{item.title}</h2>
      <p className="text-gray-700 text-sm mr-1">{item.price}$</p>

      {/* Quantity Control */}
      <div className="flex items-center space-x-2-4 gap-2 text-sm">
        <button
          className="px-2 py-1 bg-gray-300 rounded text-gray-700 cursor-pointer"
          onClick={decrementQuantity}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <input
          className="w-12 text-center border rounded px-2 py-1"
          type="number"
          value={item.quantity}
          onChange={(e) => changeQuantity(Number(e.target.value))}
          min="1"
          max="6"
          aria-label={`Quantity for ${item.title}`}
        />
        <button
          className="px-2 py-1 bg-gray-300 rounded text-gray-700"
          onClick={incrementQuantity}
          disabled={item.quantity >= 6}
        >
          +
        </button>
      </div>

      <button
        className="text-red-500 hover:text-red-600"
        onClick={removeItem}
        aria-label={`Remove ${item.title} from cart`}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default CartItem;
