import { motion } from 'framer-motion';
export default function ProductCard({product}){
  return (
    <motion.div layout whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="w-full h-56 sm:h-48 md:h-44 lg:h-52 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover"/>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        <div className="mt-3">
          <span className="text-pink-600 font-bold">₹{product.price}</span>
        </div>
      </div>
    </motion.div>
  );
}
