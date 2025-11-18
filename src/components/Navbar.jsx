import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    { name: "Flowers", path: "/category/flowers" },
    { name: "Colors", path: "/category/colors" },
    { name: "Home Made Crafts", path: "/category/crafts" },
    { name: "Decor Items", path: "/category/decor" },
    { name: "Handmade Gifts", path: "/category/gifts" }
  ];

  return (
    <header className="shadow bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          CraftStore
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium relative">
          <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-900">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-gray-900">Contact Us</Link></li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 text-gray-700 text-xl">
          <button className="hover:text-gray-900">
            <FaSearch />
          </button>

          <Link to="/wishlist" className="hover:text-gray-900">
            <FaHeart />
          </Link>

          <Link to="/cart" className="hover:text-gray-900">
            <FaShoppingCart />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 text-gray-700 font-medium gap-4">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact Us</Link></li>


        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 px-6 pb-4 text-gray-700 text-xl">
          <button className="hover:text-gray-900">
            <FaSearch />
          </button>

          <Link to="/wishlist" className="hover:text-gray-900">
            <FaHeart />
          </Link>

          <Link to="/cart" className="hover:text-gray-900">
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </header>
  );
}
