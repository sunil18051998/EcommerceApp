import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await fetch('http://localhost:3003/products/featured');
        const data = await response.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to E-Shop</h1>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-xl font-semibold text-gray-900">Featured Products</h2>
            <p className="mt-2 text-gray-500">Discover our handpicked collection of premium products</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <div className="col-span-full text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            </div>
          ) : featuredProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">
              No featured products available
            </div>
          ) : (
            featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                onClick={() => handleViewProduct(product.id)}
              >
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 group-hover:opacity-75">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  <p className="mt-2 text-xl font-bold text-indigo-600">${product.price}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <div className="text-4xl text-indigo-600 mb-4">🚀</div>
              <h3 className="text-lg font-medium text-gray-900">Fast Delivery</h3>
              <p className="mt-2 text-gray-500">We deliver your products quickly and safely</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <div className="text-4xl text-indigo-600 mb-4">💰</div>
              <h3 className="text-lg font-medium text-gray-900">Best Prices</h3>
              <p className="mt-2 text-gray-500">Competitive pricing on all our products</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <div className="text-4xl text-indigo-600 mb-4">⭐</div>
              <h3 className="text-lg font-medium text-gray-900">Quality Products</h3>
              <p className="mt-2 text-gray-500">Only the best products in our store</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
