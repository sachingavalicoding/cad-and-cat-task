import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const location = useLocation(); // Get current route

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);


  return (
    <nav className="bg-slate-900 dark:bg-gray-200 text-white dark:text-black py-4 px-6 shadow-md relative"> {/* Added relative for absolute positioning of mobile menu */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <BiMenu
            className="text-xl lg:hidden cursor-pointer" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
          <h2 className="font-bold text-xl md:text-3xl">Cad And Cart</h2>
        </div>

        <ul className="hidden lg:flex items-center gap-6 text-[14px] md:text-lg">
          <Link to="/" className={({ isActive }) => isActive ? "text-blue-500 dark:text-blue-300" : "hover:text-gray-300 dark:hover:text-gray-600"}>
            Home
          </Link>
          <Link to="/products" className={({ isActive }) => isActive ? "text-blue-500 dark:text-blue-300" : "hover:text-gray-300 dark:hover:text-gray-600"}>
            Shop
          </Link>
          <Link to="/carts" className={({ isActive }) => isActive ? "text-blue-500 dark:text-blue-300" : "hover:text-gray-300 dark:hover:text-gray-600"}>
            Cart
          </Link>
        </ul>

        <div className="flex items-center gap-4">
          <button className="bg-white hidden md:flex text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Get Started
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-700 dark:bg-gray-300 text-white dark:text-black rounded-full"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 dark:bg-gray-200 text-white dark:text-black py-4 px-6 z-10 lg:hidden"> {/* z-10 for proper layering */}
          <div className="flex justify-end">
            <AiOutlineClose className="text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}/>
          </div>
          <ul className="flex flex-col gap-4 text-lg">
            <Link to="/" className={({ isActive }) => isActive ? "text-blue-500 dark:text-blue-300" : "hover:text-gray-300 dark:hover:text-gray-600"}>
              Home
            </Link>
            <Link to="/products" className={({ isActive }) => isActive ? "text-blue-500 dark:text-blue-300" : "hover:text-gray-300 dark:hover:text-gray-600"}>
              Shop
            </Link>
            <Link to="/carts" className={({ isActive }) => isActive ? "text-blue-500 dark:text-blue-300" : "hover:text-gray-300 dark:hover:text-gray-600"}>
              Cart
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;