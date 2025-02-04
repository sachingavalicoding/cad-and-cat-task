import PropTypes from "prop-types";
import PrimaryButton from "../buttons/PrimaryButton";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

const Card = ({ product }) => {
  const { title, images, description, price, stock, id } = product;
  const {addToCart} = useCart();
  const handleAddToCart = () => {
    addToCart(product);
    alert(` Product Added Successfully`);
  }
  return (
  
    <li className=" bg-white  text-black shadow-2xl  w-[23rem] flex flex-col  rounded-md   p-4">
       <Link to={`/products/${id}`}>
      <div className="w-full h-72 overflow-hidden flex justify-center items-center">
        <img src={images[0]} alt={title} className="object-cover w-full h-full rounded-t-md" />
      </div>
      <div className="p-4 flex flex-col space-y-2">
        <Heading classes="text-lg font-semibold">{title}</Heading>
        <Paragraph classes="text-sm text-gray-600 dark:text-gray-400 truncate">{description}</Paragraph>
        <div className="flex justify-between items-center">
          <Paragraph className="text-lg font-bold">${price}</Paragraph>
          <Paragraph classes={`text-sm font-medium ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock > 0 ? `In Stock: ${stock}` : "Out Of Stock"}
          </Paragraph>
        </div>
        </div>
      </Link>
      <PrimaryButton disabled={stock === 0} onClick={handleAddToCart} >Add to Cart</PrimaryButton>
    </li>
  
  );
};

export default Card;

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};
