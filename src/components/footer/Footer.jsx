import { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert(`Subscribed with ${email}`);
  };

  return (
    <footer className="bg-white text-black dark:text-white py-8 mt-20 dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl  font-bold mb-4">Cad and Cart</h2>
        <p className="text-lg mb-6">
          Stay updated with the latest news and offers. Subscribe to our newsletter!
        </p>

        
        <div className="flex flex-wrap justify-center gap-4 items-center mb-8">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 text-black shadow-lg rounded-lg focus:outline-none dark:text-white dark:bg-gray-700"
          />
          <PrimaryButton
            onClick={handleSubscribe}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Subscribe
          </PrimaryButton>
        </div>

       
        <div className="flex justify-center gap-8 text-sm mb-6">
          <Link  className="hover:text-gray-300 dark:hover:text-gray-200">
            Privacy Policy
          </Link>
          <Link  className="hover:text-gray-300 dark:hover:text-gray-200">
            Terms of Service
          </Link>
          <Link  className="hover:text-gray-300 dark:hover:text-gray-200">
            Contact Us
          </Link>
        </div>

        <p className="text-sm text-gray-400 dark:text-gray-500">
          © 2025 Cad and Cart. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
