import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";
import Product from './pages/product';
import Cart from "./pages/cart";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="Checkout" element={<Checkout/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
