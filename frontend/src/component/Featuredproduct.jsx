import ProductCard from "./Productcard";

const featuredProducts = [
  {
    id: "1",
    name: "Professional Racing Jacket with Armor Protection",
    price: 299,
    originalPrice: 399,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Carbon Fiber Motorcycle Helmet",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1558618047-d8ad38d2d04c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "Leather Racing Suits Complete Set",
    price: 799,
    originalPrice: 999,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    reviews: 67,
  },
  {
    id: "4",
    name: "Protective Gear Vest with Back Support",
    price: 159,
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    reviews: 156,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular safety equipment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
