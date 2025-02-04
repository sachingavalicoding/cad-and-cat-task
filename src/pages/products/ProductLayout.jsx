import { useState, useMemo } from "react";
import Card from "../../components/card/Card";
import Container from "../../components/ui/Container";
import { useProducts } from "../../contexts/ProductContext";
import ProductsFilters from "./ProductsFilters";
import ReactPaginate from "react-paginate";
import Heading from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";

const ProductLayout = () => {
  const { filteredProducts, loading } = useProducts();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; 

  
  const displayedProducts = useMemo(() => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredProducts.slice(start, end);
  }, [currentPage, filteredProducts]);

  
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <Container>
      <ProductsFilters />
      <Heading className=" text-center font-bold mb-8 ">Our Products </Heading>

      {loading ? (
        <Paragraph className="text-center text-lg font-semibold">Loading...</Paragraph>
      ) : filteredProducts.length > 0 ? (
        <>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {displayedProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          
          <div className="flex justify-center mt-6 pb-14">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
              onPageChange={handlePageClick}
              containerClassName="flex gap-4 items-center"
              pageClassName="px-4 py-2 cursor-pointer bg-gray-300 rounded-lg hover:bg-gray-400 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              activeClassName="bg-blue-600 text-white rounded-lg dark:bg-blue-500"
              disabledClassName="text-gray-500 cursor-not-allowed dark:text-gray-400"
            />
          </div>
        </>
      ) : (
        <Paragraph>No products available</Paragraph>
      )}
    </Container>
  );
};

export default ProductLayout;
