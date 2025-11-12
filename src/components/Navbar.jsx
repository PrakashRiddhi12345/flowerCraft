import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar(){
  const [open,setOpen] = useState(false);
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-pink-600">Craftify</div>
          <div className="hidden md:flex gap-6 text-gray-600 font-medium">
            <button className="hover:text-pink-500">Home</button>
            <button className="hover:text-pink-500">Shop</button>
            <button className="hover:text-pink-500">About</button>
            <button className="hover:text-pink-500">Contact</button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded-lg bg-pink-50 text-pink-600 border border-pink-200">Login</button>
        </div>

        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} aria-label="menu">
            {open ? <FiX size={24}/> : <FiMenu size={24}/>}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-2 p-4">
            <button className="text-left">Home</button>
            <button className="text-left">Shop</button>
            <button className="text-left">About</button>
            <button className="text-left">Contact</button>
          </div>
        </nav>
      )}
    </header>
  )
}
