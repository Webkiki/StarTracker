import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); //  meniului mobil

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black text-white shadow-lg p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">
          <p>AstroExplorer</p>
        </div>

        {/* Meniu pe desktop  */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/starpage" className="hover:underline">
            Stars
          </Link>
          <Link to="/constellations" className="hover:underline">
            Constellations
          </Link>
          <Link to="/starprivate" className="hover:underline">
            Star Private Page
          </Link>
          <Link to="/constellationprivate" className="hover:underline">
            ConstellationPrivatePage
          </Link>
        </div>

        <button
          className="md:hidden text-white "
          onClick={toggleMenu} // Toggle pentru meniul mobil
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/*stilizare pt mobil */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } mt-4 space-y-4`}
      >
        <Link to="/" className="block hover:underline">
          Home
        </Link>
        <Link to="/starpage" className="block hover:underline">
          Stars
        </Link>
        <Link to="/constellations" className="block hover:underline">
          Constellations
        </Link>
        <Link to="/starprivate" className="block hover:underline">
          Star Private Page
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
