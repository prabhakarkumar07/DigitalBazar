import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import ProductListPage from "./pages/ProductListPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Navigation />

      <div className="w-full max-w-4xl mx-auto mt-20">
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
