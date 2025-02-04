
import axios from "axios";

const PRODUCTS_URL = "https://dummyjson.com/products";
const CART_URL = "https://dummyjson.com/carts";

export const getProducts = async () => {
  try {
    const response = await axios.get(PRODUCTS_URL);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


export const addProduct = async (productData) => {
  try {
    const response = await axios.post(CART_URL + "/add", productData);
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
};

// getting cart products 
export const getCartProducts = async () => {
  try {
    const response = await axios.get(`https://dummyjson.com/carts/1`);
    return response.data || []; // Assuming the response contains products directly
  } catch (error) {
    console.error("ERROR IN FETCH CART ITEMS:", error);
    return null; 
  }
};



