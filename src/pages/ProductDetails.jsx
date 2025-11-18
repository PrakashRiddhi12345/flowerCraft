import { useParams } from "react-router-dom";
import { productsData } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  console.log("Product ID:", id);

  const product = productsData.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 mt-10 grid md:grid-cols-2 gap-8">

      {/* Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
        <p className="text-gray-700 text-lg mb-3">
          {product.description}
        </p>

        <p className="text-2xl font-semibold text-green-600 mb-5">
          ₹{product.price}
        </p>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>

    </div>
  );
}
