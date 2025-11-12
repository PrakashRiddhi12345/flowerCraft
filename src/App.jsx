import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import OfferSlider from './components/Offerslider';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { products, categories } from './data/productData';

function App(){
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  useEffect(()=> {
    const t = setTimeout(()=> setLoading(false), 900);
    return ()=> clearTimeout(t);
  }, []);

  const filtered = products.filter(p=>{
    const matchCat = category === 'All' || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <AnimatePresence>
      {loading ? (
        <motion.div className="flex-1 flex items-center justify-center"
          initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <div className="w-20 h-20 rounded-full border-4 border-pink-500 border-t-transparent animate-spin"></div>
        </motion.div>
      ) : (
        <motion.main initial={{opacity:0}} animate={{opacity:1}} className="flex-1">
          <OfferSlider />

          <section className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
                     placeholder="Search products..." className="w-full md:w-1/2 px-4 py-2 rounded-lg border"/>
              <select value={category} onChange={e=>setCategory(e.target.value)} className="w-full md:w-1/4 px-4 py-2 rounded-lg border">
                {categories.map(c=> <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center text-gray-500 py-12">No products found.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </section>

          <Footer/>
        </motion.main>
      )}
      </AnimatePresence>
    </div>
  );
}

export default App;
