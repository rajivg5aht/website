import { Routes, Route } from "react-router-dom";


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

import Landing from "./pages/landing";
import Manageaccount from "./pages/Manageaccount";
import ManageAddress from "./pages/ManageAddress";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import Navbar from "./component/Navbar";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/productdetails" element={<Productdetails />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />
        <Route path="/manageaccount" element={<Manageaccount />} />
        <Route path="/manage-address" element={<ManageAddress />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/orders" element={<Order />} />
        <Route path="/admin/users" element={<User />} />
        <Route path="/admin/products" element={<Product />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/products/edit/:productId" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
