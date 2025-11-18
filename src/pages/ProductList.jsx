import { Link, useParams } from "react-router-dom";
import { productsData } from "../data/products";

export default function ProductList() {
  const { category } = useParams();

  const filteredProducts = productsData.filter(
    (p) => p.category === category
  );

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        {category} Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {filteredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="shadow-md rounded-lg overflow-hidden bg-white hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
