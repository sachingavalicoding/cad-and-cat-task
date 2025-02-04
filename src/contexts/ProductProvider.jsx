import { useEffect, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { getProducts } from "../utils/productsApi.js";
import { ProductContext } from "./ProductContext.jsx";

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category && category !== "All") {
      filtered = filtered.filter((product) =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (priceRange) {
      filtered = filtered.filter(
        (product) => product.price >= priceRange.min && product.price <= priceRange.max
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, category, priceRange, products]);

  const memoizedSetCategory = useCallback((value) => setCategory(value), []);
  const memoizedSetSearchQuery = useCallback((value) => setSearchQuery(value), []);
  const memoizedSetPriceRange = useCallback((value) => setPriceRange(value), []);

  const memoizedFilteredProducts = useMemo(() => filteredProducts, [filteredProducts]);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        filteredProducts: memoizedFilteredProducts,
        setCategory: memoizedSetCategory,
        setSearchQuery: memoizedSetSearchQuery,
        setPriceRange: memoizedSetPriceRange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
