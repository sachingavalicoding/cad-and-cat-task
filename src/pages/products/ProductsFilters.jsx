import { AiFillFilter } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { useProducts } from "../../contexts/ProductContext";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import Heading from "../../components/ui/Heading";

const ProductsFilters = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [isOpen, setIsOpen] = useState(false);

  const {
    setCategory: setCategoryContext,
    setSearchQuery,
    setPriceRange,
  } = useProducts();

  // Handle search query change
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  };

  // Handle category tab change
  const handleCategoryChange = (category) => {
    setCategory(category);
    setCategoryContext(category);
  };

  // Handle price range change
  const handlePriceChange = () => {
    setPriceRange({ min: minPrice, max: maxPrice });
    setIsOpen(!isOpen);
  };

  return (
    <>
      
      <div className="flex items-center gap-6 p-4 py-10 ">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleQueryChange}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-96"
        />
        <div className="flex items-center gap-4">
          <AiFillFilter
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-xl text-black dark:text-white"
          />
          <Link to={"/carts"}> <FaCartShopping  className="text-xl text-black dark:text-white" /> </Link>
        </div>
      </div>

   
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-0 z-50 bg-black bg-opacity-50 transition-transform duration-300 ease-in-out`}
     
      >
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } bg-white w-96 h-full p-6 shadow-lg transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center mb-6">
            <Heading classes={"text-xl font-semibold"}>Filters</Heading>
            <button onClick={() => setIsOpen(false)} className="text-xl">
             <IoCloseSharp />
            </button>
          </div>

          
          <div className="mb-6">
            <Heading classes={"font-semibold text-lg mb-3"}>Category</Heading>
            <div className="flex gap-3 flex-wrap">
              {["All", "Beauty", "Groceries", "Furniture", "Fragrances"].map(
                (cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-6 py-2 rounded-lg focus:outline-none ${
                      category === cat
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-black hover:bg-blue-400"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Price Range Filters */}
          <div className="mb-6">
            <Heading classes={"font-semibold text-lg mb-3"}>Price Range</Heading>
            <div className="flex justify-between text-sm mb-2">
              <span>Min Price: ${minPrice}</span>
              <span>Max Price: ${maxPrice}</span>
            </div>
            <div className="flex gap-4">
              <input
                type="range"
                min="0"
                max="5000"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full"
              />
              <input
                type="range"
                min="0"
                max="5000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          
          <PrimaryButton
            type="button"
            onClick={handlePriceChange}
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Apply Filters
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default ProductsFilters;
