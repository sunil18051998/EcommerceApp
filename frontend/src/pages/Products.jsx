import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOptions, setSortOptions] = useState({
    priceLowToHigh: false,
    priceHighToLow: false,
    newestFirst: false
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3004/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleSortChange = (option) => {
    setSortOptions(prev => {
      const newOptions = { ...prev };
      newOptions[option] = !newOptions[option];
      return newOptions;
    });

    // Apply sorting based on selected options
    let sortedProducts = [...filteredProducts];

    if (sortOptions.priceLowToHigh) {
      sortedProducts.sort((a, b) => a.price - b.price);
    }
    if (sortOptions.priceHighToLow) {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (sortOptions.newestFirst) {
      // Assuming products have a date field, otherwise sort by id
      sortedProducts.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(sortedProducts);
  };

  const handleAddToCart = async (productId) => {
    try {
      await axios.post('http://localhost:3002/cart', { productId });
      // You might want to update the cart count in the UI here
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-1/5">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h2 className="text-lg font-medium mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="flex space-x-2">
                  <input 
                    type="number" 
                    placeholder="Min" 
                    className="w-24 border rounded-md px-3 py-2"
                  />
                  <input 
                    type="number" 
                    placeholder="Max" 
                    className="w-24 border rounded-md px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label className="text-sm text-gray-600">Electronics</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label className="text-sm text-gray-600">Clothing</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label className="text-sm text-gray-600">Home & Living</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-3 text-left">
            <h2 className="text-sm font-medium mb-2">Sort By</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={sortOptions.priceLowToHigh}
                  onChange={() => handleSortChange('priceLowToHigh')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">Price: Low to High</label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={sortOptions.priceHighToLow}
                  onChange={() => handleSortChange('priceHighToLow')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">Price: High to Low</label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={sortOptions.newestFirst}
                  onChange={() => handleSortChange('newestFirst')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">Newest First</label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col gap-6">
          {/* Search Bar */}
          <div className="w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-1">
            {filteredProducts.map((product) => (
              <Link to={`/products/${product.id}`} className="block" key={product.id}>
                <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="aspect-w-1 aspect-h-1 bg-gray-200 group-hover:opacity-75">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover object-center w-full h-72"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    <p className="mt-2 text-xl font-bold text-indigo-600">${product.price}</p>
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>

        {/* Widget Space */}
        <aside className="hidden lg:block w-1/5">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <h2 className="text-lg font-medium mb-4">Popular Products</h2>
            {/* Widget content will be added here */}
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-medium mb-4">Special Offers</h2>
            {/* Widget content will be added here */}
          </div>
        </aside>
      </div>
    </div>
  );
}
