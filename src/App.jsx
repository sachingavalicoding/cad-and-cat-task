import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductProvider from "./contexts/ProductProvider";
import HomeLayout from "./pages/home/HomeLayout";
import DetailProductPage from "./pages/products/DetailProductPage";
import Navbar from "./components/navbar/Navbar";
import ProductLayout from "./pages/products/ProductLayout";
import CartLayout from "./pages/cart/CartLayout";
import CartProvider from "./contexts/CartProvider";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/products" element={<ProductLayout />} />
            <Route path="/carts" element={<CartLayout />} />
            <Route path="/products/:id" element={<DetailProductPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
};

export default App;
