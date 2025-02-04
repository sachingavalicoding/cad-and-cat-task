/* eslint-disable react/prop-types */

import PrimaryButton from "../../components/buttons/PrimaryButton";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";

const ProductDetailCard = ({ product, handleAddToCart }) => {
  return (
    <article className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 bg-white  shadow-md rounded-lg">
      <div className="flex justify-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-2xl rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center ">
        <Heading>{product.title}</Heading>
        <Paragraph className="text-lg font-semibold text-blue-600">
          ${product.price}
        </Paragraph>
        <Paragraph>{product.description}</Paragraph>
        <Paragraph> Rating : {product.rating} </Paragraph>
        <Paragraph
          className={`text-sm font-medium ${
            product.stock > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.stock > 0 ? `In Stock: ${product.stock}` : "Out Of Stock"}
        </Paragraph>
        <PrimaryButton onClick={handleAddToCart}>Add To Cart</PrimaryButton>
      </div>
    </article>
  );
};

export default ProductDetailCard;
