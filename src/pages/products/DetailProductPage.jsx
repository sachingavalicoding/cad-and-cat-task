import { useParams } from "react-router-dom";
import Container from "../../components/ui/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductContext";
import { useCart } from "../../contexts/CartContext";
import ProductDetailCard from "./ProductDetailCard";
import RelatedProduct from "./RelatedProduct";
import Paragraph from "../../components/ui/Paragraph";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { products } = useProducts();
  const { addToCart } = useCart();
  useEffect(() => {
    let isMounted = true;

    const getSingleProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        if (isMounted) {
          setProduct(response.data);
          setRelatedProducts(
            products.filter((item) => item.category === response.data.category)
          );
        }
      } catch (error) {
        console.error("ERROR IN FETCH SINGLE PRODUCT", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getSingleProduct();

    return () => {
      isMounted = false;
    };
  }, [id, products]);

  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <Container className="flex flex-col items-center min-h-screen p-6">
      {loading ? (
        <Paragraph className="text-lg font-semibold">Loading...</Paragraph>
      ) : product ? (
        <>
          <ProductDetailCard
            product={product}
            handleAddToCart={handleAddToCart}
          />
          <RelatedProduct relatedProducts={relatedProducts} />
        </>
      ) : (
        <Paragraph className=" font-semibold">Product not found</Paragraph>
      )}
    </Container>
  );
};

export default DetailProductPage;
