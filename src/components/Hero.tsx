import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden text-white min-h-screen flex items-center" style={{ background: 'linear-gradient(135deg, hsl(240 85% 40%) 0%, hsl(260 75% 50%) 100%)' }}>
      <div className="container mx-auto px-4 py-32 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-blue-800/40 backdrop-blur-sm rounded-full px-5 py-2 mb-8 border border-white/20">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Premium Quality Products</span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="text-white">Shop Smart,</span>
          <br />
          <span className="text-orange-400">Live Better</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Discover curated collections of premium products at<br />
          unbeatable prices. Your satisfaction is our promise.
        </p>

        {/* Button */}
        <button
          onClick={scrollToProducts}
          className="inline-flex items-center gap-3 px-10 py-4 text-lg font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Start Shopping
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white via-purple-100 to-transparent" />
    </section>
  );
};

export default Hero;