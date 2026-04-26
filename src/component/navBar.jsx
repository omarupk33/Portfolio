import React, { useState } from "react";
function NavBar() {
  const items = ['Home', 'Profile', 'Support', 'Skills']
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold uppercase text-4xl">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 pt-4">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-4 pb-4 space-y-3">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};
export default NavBar