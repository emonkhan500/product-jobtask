import React, { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const productsPerPage = 10;

  useEffect(() => {
    fetch(
      `http://localhost:5000/product?page=${currentPage}&limit=${productsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data.products);
        setTotalPages(data.totalPages);
      });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 shadow-lg rounded-lg">
            <img src={product.img} alt="" />
            <h2 className="text-xl text-red-700 font-semibold mt-4"> <span className="text-blue-600 text-sm mr-5">Name:</span> {product.title}</h2>
            <div className="flex gap-4">
            <h2 className="text-lg font-semibold"><span className="text-purple-600 text-sm mr-2">Brand:</span>{product.brand_name}</h2>
            <h2 className="text-lg font-semibold"><span className="text-purple-600 text-sm mr-2">Brand:</span>{product.category_name}</h2>
            </div>
            <h2 className=" "><span className="text-green-500 text-sm mr-2">Description:</span> {product.description}</h2>

            <p className="text-red-600"> <span className="text-sky-500 text-sm mr-2">Price:</span>{product.price_range}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
