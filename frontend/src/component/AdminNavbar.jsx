import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserShield,
  FaUsers,
  FaBox,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaHome,
  FaTachometerAlt,
  FaClipboardList,
  FaBell,

} from "react-icons/fa";
import ehaat from "../assets/logo.png"; // Adjust the path as necessary
export const ADMIN_NAVBAR_HEIGHT = 80;

function AdminNavbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  // Removed useNotification usage due to missing NotificationContext
  // const { showNotification } = useNotification();

  const adminNavLinks = [
    { label: "Dashboard", href: "/admin/dashboard", icon: <FaTachometerAlt /> },
    { label: "Orders", href: "/admin/orders", icon: <FaClipboardList /> },
    { label: "Users", href: "/admin/users", icon: <FaUsers /> },
    { label: "Products", href: "/admin/products", icon: <FaBox /> },
    { label: "Settings", href: "/admin/settings", icon: <FaCog /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("isAdmin");
    setDropdownOpen(false);
    // Removed showNotification call due to missing NotificationContext
    // showNotification(
    //   "info",
    //   "Admin Logout",
    //   "You have been successfully logged out from admin panel."
    // );
    navigate("/admin/login");
  };

  const handleGoToUserSite = () => {
    navigate("/");
    // Removed showNotification call due to missing NotificationContext
    // showNotification(
    //   "info",
    //   "Switching to User Site",
    //   "Redirecting to e-Haat user interface."
    // );
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg text-black">
      {/* Main Admin Navbar */}
      <div className="flex justify-between items-center h-20 px-4 md:px-8 lg:px-12">
        {/* Logo and Brand */}
        <motion.div
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <NavLink
            to="/admin/dashboard"
            className="flex items-center space-x-2"
          >
            <img src={ehaat} alt="E-Haat Admin" className="h-10" />
            <div className="hidden md:block">
              <span className="text-xl font-bold"></span>
           
            </div>
          </NavLink>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {adminNavLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                      ? "bg-gray-200 text-black shadow-lg"
                      : "text-black hover:text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {link.icon}
                <span className="text-sm font-medium">{link.label}</span>
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Admin Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative p-2 text-black hover:text-gray-700 transition-colors"
          >
            <FaBell className="text-lg" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </motion.button>

          {/* Admin Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <motion.button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 text-black hover:text-gray-700 transition-colors focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <FaUserShield className="text-white text-sm" />
              </div>
              <span className="hidden md:block text-sm font-medium">Admin</span>
              <motion.span
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs"
              >
                ▾
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
                >
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <FaUserShield className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Administrator
                        </p>
                        <p className="text-xs text-gray-500">
                          admin@helmets.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="py-2">
                    <NavLink
                      to="/admin/dashboard"
                      className="flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors text-gray-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <FaTachometerAlt className="text-gray-500" />
                      <span>Dashboard</span>
                    </NavLink>
                    <NavLink
                      to="/admin/settings"
                      className="flex items-center space-x-3 px-4 py-3 text-sm hover:bg-gray-50 transition-colors text-gray-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <FaCog className="text-gray-500" />
                      <span>Settings</span>
                    </NavLink>
                    <button
                      onClick={handleGoToUserSite}
                      className="flex items-center space-x-3 w-full px-4 py-3 text-sm hover:bg-gray-50 transition-colors text-gray-700"
                    >
                      <FaHome className="text-gray-500" />
                      <span>Go to User Site</span>
                    </button>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-3 w-full px-4 py-3 text-sm hover:bg-gray-50 text-red-500 transition-colors"
                    >
                      <FaSignOutAlt />
                      <span>Logout</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6 text-black" />
            ) : (
              <FaBars className="h-6 w-6 text-black" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-300"
          >
            <div className="px-4 py-4 space-y-2">
              {adminNavLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gray-300 text-black"
                        : "text-black hover:text-gray-700 hover:bg-gray-200"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.label}</span>
                </NavLink>
              ))}

              <div className="border-t border-gray-300 pt-2 mt-2">
                <button
                  onClick={handleGoToUserSite}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-black hover:text-gray-700 hover:bg-gray-200 rounded-lg transition-all duration-200"
                >
                  <FaHome />
                  <span className="text-sm font-medium">Go to User Site</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:text-red-500 hover:bg-gray-200 rounded-lg transition-all duration-200"
                >
                  <FaSignOutAlt />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default AdminNavbar;
