import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchProductFromApi() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      console.log(data.products, "data");
      setProducts(data.products);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductFromApi();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <AiOutlineLoading3Quarters className=" text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="product-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 bg-black rounded-md gap-x-4 gap-y-2 p-4 border place-items-center">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListPage;
