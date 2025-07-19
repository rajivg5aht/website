import { Search, ShoppingCart, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import UserDropdown from "../context/UserDropdown";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="w-full border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="w-15 h-15 rounded" />
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:text-gray-600 font-medium"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                About
              </Link>
              {!user && (
                <Link
                  to="/register"
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Signup
                </Link>
              )}
            </nav>

            {/* Right Side Icons and Search */}
            <div className="flex items-center space-x-4">
              <div className="relative flex items-center space-x-2">
                {searchOpen && (
                  <form
                    onSubmit={handleSearchSubmit}
                    className="absolute right-10"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </form>
                )}
                <button
                  onClick={handleSearchToggle}
                  className="p-2 hover:bg-gray-100 rounded-full"
                  aria-label="Toggle search"
                >
                  <Search className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </Link>
              {user ? (
                <UserDropdown logout={logout} />
              ) : (
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
