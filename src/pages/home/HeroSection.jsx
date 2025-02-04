import { Link } from "react-router-dom";
import img from "/hero-img2.svg";
const HeroSection = () => {
  return (
    <main className="bg-gray-100  w-full h-screen grid md:grid-cols-2 gap-6 px-4">
      <div className="flex justify-center items-center w-full">
        <img
          src={img}
          alt="Coding Illustration"
          className=" w-full lg:w-[38rem]  rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2 text-center flex flex-col justify-center md:text-left">
        <h1 className="text-5xl font-bold text-gray-800 mb-6 md:text-6xl">
          Discover Your Next Favorite Thing
        </h1>
        <p className="text-lg text-gray-600 mb-8 md:text-xl">
          Explore a curated collection of high-quality products, hand-picked for
          you. From everyday essentials to extraordinary finds, we have got
          something for everyone.
        </p>
        <div className="flex justify-center md:justify-start">
          <Link to={"/products"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mr-4 transition duration-300">
              Shop Now
            </button>
          </Link>
          <button className="bg-gray-200 dark:bg-gray-900 dark:text-white hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
