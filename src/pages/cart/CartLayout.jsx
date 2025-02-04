import CartItem from "./CartItem";
import { useCart } from "../../contexts/CartContext";
import Container from "../../components/ui/Container";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Heading";
import PrimaryButton from "../../components/buttons/PrimaryButton"
import { Link } from "react-router-dom";
const CartLayout = () => {
  const { cartItems, cartLoading } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <section className="flex flex-col lg:flex-row gap-6 px-6 py-6 bg-white shadow-lg rounded-lg">
        <div className="w-full lg:w-2/3 flex flex-col gap-6 relative">
          <Heading> Your Cart</Heading>
          <Link className="absolute top-0 text-[17px] underline left-0" to={"/products"}> Back </Link>
          {cartLoading ? (
            <Paragraph>Loading...</Paragraph>
          ) : cartItems.length > 0 ? (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <Paragraph>No items in your cart.</Paragraph>
          )}
        </div>

        <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <Heading>Order Summary</Heading>

          <div className="mb-4">
            <Paragraph classes="text-[18px] ">
              Total Items: {cartItems.length}
            </Paragraph>
            <Paragraph classes="text-xl ">
              Total Price: ${totalPrice.toFixed(2)}
            </Paragraph>
          </div>

          <div className="mb-4">
            <Heading classes="text-lg ">Shipping</Heading>
            <select className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Standard Delivery">Standard Delivery</option>
              <option value="Express Delivery">Express Delivery</option>
              <option value="Next Day Delivery">Next Day Delivery</option>
            </select>
          </div>

          <div className="mb-4">
            <Heading classes="text-lg  mb-2">
              Promo Code
            </Heading>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Promo Code"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
                Apply
              </button>
            </div>
          </div>

          <div className="mb-6">
            <Paragraph classes="text-lg font-semibold ">
              Total Price: ${totalPrice.toFixed(2)}
            </Paragraph>
          </div>

          <PrimaryButton className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none">
            Checkout
          </PrimaryButton>
        </div>
      </section>
    </Container>
  );
};

export default CartLayout;
