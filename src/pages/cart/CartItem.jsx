import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { FaTrash } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
const CartItem = ({ item }) => {
  const { updateQuantity, deleteItem } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(item.quantity); // Update local state when the item quantity changes
  }, [item.quantity]);

  const handleQuantityChange = (e) => {
    const newQuantity = Math.max(1, Number(e.target.value));
    setQuantity(newQuantity);
    updateQuantity(item.id, newQuantity);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => {
      const newQuantity = prev + 1;
      updateQuantity(item.id, newQuantity);
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      const newQuantity = Math.max(1, prev - 1);
      updateQuantity(item.id, newQuantity);
      return newQuantity;
    });
  };

  const handleDeleteItem = () => {
    if(confirm(" You Want Remove This Item from Cart")){
      deleteItem(item.id);
    }
    
  };

  const totalPrice = item.price * quantity;

  return (
    <div className="p-6 bg-white border relative border-gray-300 rounded-lg shadow-md flex flex-col lg:flex-row gap-6 items-center">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full sm:w-44 object-cover rounded-lg max-w-[150px]"
      />
      <div className="flex flex-col gap-2 w-full">
        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        <p className="text-lg text-gray-600">
          Stock{" "}
          {item.stock <= quantity ? " Product Out of Stock" : item.stock - quantity}{" "}
        </p>
        <p className="text-lg text-gray-600">Price: ${item.price}</p>
        <div className="flex items-center gap-4 justify-between lg:justify-start">
          <div className="flex items-center gap-3">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              disabled={item.stock == quantity}
              onChange={handleQuantityChange}
              className="w-16 text-center border border-gray-300 rounded-md p-2"
              min="1"
            />
            <button
              onClick={increaseQuantity}
              disabled={item.stock == quantity}
              className="px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              +
            </button>
          </div>
          <p className="text-gray-600">Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <button
        onClick={handleDeleteItem}
        className="text-blue-600 text-xl absolute top-5 right-4"
      >
        {" "}
        <FaTrash />{" "}
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
