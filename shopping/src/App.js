import Home from "./homepage";
import NavBar from "./nav";
import ProductApp from "./cartpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Displaycart from "./displaycart";
import Checkout from "./checkout";

function App() {
  return (
    <CartProvider>
      {/* Wraps the app in the CartProvider */}
      <Router>
        <div className="App">
          <div className="nav-items">
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductApp />} />
            <Route path="/cart" element={<Displaycart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
