import { Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Productdetails from "./pages/Productdetails";
import Navbar from "./component/Navbar";
import Landing from "./pages/landing";

function App() {
  return (
    <>
      <Navbar />
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
      </Routes>
    </>
  );
}

export default App;
