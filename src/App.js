import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import URLsNotMatch from "./components/URLsNotMatch";
import Products from "./components/Products";
import New from "./components/New";
import Feature from "./components/Feature";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="ordersummary" element={<OrderSummary />} />
        <Route path="*" element={<URLsNotMatch />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Feature />} />
          <Route path="feature" element={<Feature />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
