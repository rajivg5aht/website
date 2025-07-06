import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);


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
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Signup
              </a>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
              {user ? (
                <>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <User className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      window.location.href = "/";
                    }}
                    className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-900 font-medium"
                    title="Logout"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium">
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
