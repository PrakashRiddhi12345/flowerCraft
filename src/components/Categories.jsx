import { categoriesData } from "../data/categories";
import { Link } from "react-router-dom";


export default function Categories() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-10">
      <h2 className="text-2xl font-bold mb-4">Shop by Categories</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categoriesData.map((cat) => (
          <Link
            to={`/category/${cat.slug}`}
        
            key={cat.id}
            className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition"
          >
            <img src={cat.image} className="w-full h-40 object-cover" />
            <div className="p-2 text-center font-semibold">{cat.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
