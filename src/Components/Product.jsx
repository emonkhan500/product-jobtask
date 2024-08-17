import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 10;

  useEffect(() => {
    fetch(
      `http://localhost:5000/product?page=${currentPage}&limit=${productsPerPage}&search=${encodeURIComponent(searchQuery)}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [currentPage, searchQuery]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when a new search is made
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
      
      {/* Search Input Field */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by product title..."
          className="w-full sm:w-1/2 p-2 border rounded-lg shadow-lg"
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="border p-4 shadow-lg rounded-lg">
              <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
              <h2 className="text-xl text-red-700 font-semibold mt-4">
                <span className="text-blue-600 text-sm mr-5">Name:</span> {product.title}
              </h2>
              <div className="flex gap-4">
                <h2 className="text-lg font-semibold">
                  <span className="text-purple-600 text-sm mr-2">Brand:</span>{product.brand_name}
                </h2>
                <h2 className="text-lg font-semibold">
                  <span className="text-purple-600 text-sm mr-2">Category:</span>{product.category_name}
                </h2>
              </div>
              <h2 className="">
                <span className="text-green-500 text-sm mr-2">Description:</span>{product.description}
              </h2>
              <p className="text-red-600">
                <span className="text-sky-500 text-sm mr-2">Price:</span>{product.price_range}
              </p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">No products found</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white"}`}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-200 text-gray-800" : "bg-blue-500 text-white"}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
