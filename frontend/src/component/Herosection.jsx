import { Shield, Truck, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-[600px] overflow-hidden">
      {/* Background motorcycle rider image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Motorcycle rider"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Safety
                <span className="block text-orange-400">Equipment</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-lg">
                Protect yourself with our professional-grade protective gear and
                accessories. Trusted by professionals worldwide for ultimate
                safety and performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.location.href = '/shop'}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
              >
                Shop Now →
              </button>
              <button
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold border"
              >
                Browse Categories
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-orange-400" />
                <span className="text-sm text-gray-300">Contact Safety</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-orange-400" />
                <span className="text-sm text-gray-300">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-orange-400" />
                <span className="text-sm text-gray-300">Excellent Quality</span>
              </div>
            </div>
          </div>

          {/* Right side - Product showcase */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl p-6 shadow-2xl ml-12" style={{ height: '500px' }}>
              <div className="mb-6 h-full">
                <img
                  src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Product Showcase"
                  className="w-full h-full object-cover rounded-lg"
                  style={{ maxHeight: 'none' }}
                />
              </div>

              <div className="text-right">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-lg inline-block">
                  <div className="text-lg font-bold">50,500+</div>
                  <div className="text-sm">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
