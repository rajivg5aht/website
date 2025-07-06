export default function ProductCard({ name, price, originalPrice, image, showAddToCart = true, hideDollarSign = false }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-orange-500 font-bold">{hideDollarSign ? price : `$${price}`}</span>
        {originalPrice && (
          <span className="text-gray-500 line-through">{hideDollarSign ? originalPrice : `$${originalPrice}`}</span>
        )}
      </div>
      {showAddToCart && (
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold">
          Add to Cart
        </button>
      )}
    </div>
  );
}
