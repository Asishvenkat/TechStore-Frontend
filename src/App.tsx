import  { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartModal from './components/CartModal';
import Footer from './components/Footer';
import SuccessMessage from './components/SuccessMessage';
import { api } from './services/api';
import { Product } from './types';
import { useCart } from './hooks/useCart';

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartItemCount,
  } = useCart();

  // Load products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCheckout = async () => {
    if (cart.length === 0) return;

    setCheckoutLoading(true);
    try {
      const result = await api.checkout(cart);
      if (result.success) {
        setShowSuccess(true);
        clearCart();
        setIsCartOpen(false);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert('Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Checkout failed. Please try again.');
    } finally {
      setCheckoutLoading(false);
    }
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      const yOffset = -80; 
      const y = productsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
      <Hero  />
      <SuccessMessage show={showSuccess} />

      <main id="products" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
        <ProductGrid products={products} loading={loading} onAddToCart={addToCart} />
      </main>

      <Footer />

      <CartModal
        isOpen={isCartOpen}
        cart={cart}
        cartTotal={cartTotal}
        checkoutLoading={checkoutLoading}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveFromCart={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
