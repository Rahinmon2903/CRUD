import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({ productId }) => {
  const [store, setStore] = useState({
    productname: "",
    productprice: "",
    productdesc: "",
    productimage: "",
  });

  const navigate = useNavigate();

  // fetch product when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://6904bea06b8dabde4964f28c.mockapi.io/products/${productId}`
        );
        setStore(response.data);
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };
    fetchData();
  }, [productId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStore((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://6904bea06b8dabde4964f28c.mockapi.io/products/${productId}`,
        store
      );
      navigate("/"); // go back to list after update
    } catch (error) {
      console.log("Error updating product:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-5"
      >
        {/* Product Name */}
        <div>
          <label
            htmlFor="productname"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Product Name
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="productname"
            id="productname"
            value={store.productname}
            placeholder="Enter product name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none 
                       dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Product Price */}
        <div>
          <label
            htmlFor="productprice"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Product Price
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="productprice"
            id="productprice"
            value={store.productprice}
            placeholder="Enter product price"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none 
                       dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Product Description */}
        <div>
          <label
            htmlFor="productdesc"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Product Description
          </label>
          <textarea
            name="productdesc"
            onChange={handleChange}
            id="productdesc"
            value={store.productdesc}
            placeholder="Enter product description"
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none 
                       dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Product Image */}
        <div>
          <label
            htmlFor="productimage"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Product Image URL
          </label>
          <input
            type="text"
            onChange={handleChange}
            name="productimage"
            id="productimage"
            value={store.productimage}
            placeholder="Enter product image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:ring-2 focus:ring-blue-500 focus:outline-none 
                       dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default Edit;
