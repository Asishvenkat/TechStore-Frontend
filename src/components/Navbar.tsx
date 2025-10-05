import React from "react";
import { ShoppingCart, Package } from "lucide-react";
// import logo from "@/assets/logo.jpg"; // optional if you want image instead of Package

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onCartClick }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Section */}
          <div className="flex items-center space-x-2">
            <Package className="w-8 h-8 text-blue-500" />
            {/* Or use logo image */}
            {/* <img src={logo} alt="ShopKart Logo" className="w-8 h-8 object-contain" /> */}
            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              TechStore
            </span>
          </div>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative p-2 border border-border rounded-md hover:bg-blue-500 hover:text-white transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-scale-in">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
