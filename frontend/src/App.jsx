import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Productdetails from "./pages/Productdetails";
import AdminDashboard from "./component/admin_pages/AdminDashboard";
import Order from "./component/admin_pages/Order";
import User from "./component/admin_pages/User";
import Product from "./component/admin_pages/Product";
import AddProduct from "./component/admin_pages/AddProduct";
import EditProduct from "./component/admin_pages/EditProduct";
import Setting from "./component/admin_pages/Setting";
import AdminLogin from "./component/admin_pages/AdminLogin";

import Landing from "./pages/landing";
import Manageaccount from "./pages/Manageaccount";
import ManageAddress from "./pages/ManageAddress";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import Navbar from "./component/Navbar";
import Checkout from "./pages/Checkout";

import { useEffect } from "react";

function RequireAdmin({ children }) {
  const isAdmin = localStorage.getItem('role') === 'admin' && localStorage.getItem('adminToken');
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    // Optionally, clear admin token if not on admin route
    // if (!isAdminRoute) localStorage.removeItem('adminToken');
  }, [isAdminRoute]);

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
            <RequireAdmin>
              <Routes>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="orders" element={<Order />} />
                <Route path="users" element={<User />} />
                <Route path="products" element={<Product />} />
                <Route path="products/add" element={<AddProduct />} />
                <Route path="products/edit/:productId" element={<EditProduct />} />
                <Route path="settings" element={<Setting />} />
                <Route path="*" element={<Navigate to="/admin/dashboard" />} />
              </Routes>
            </RequireAdmin>
          }
        />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productdetails" element={<Productdetails />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />
        <Route path="/manageaccount" element={<Manageaccount />} />
        <Route path="/manage-address" element={<ManageAddress />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
