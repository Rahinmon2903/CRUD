import React, { useState } from "react";

const Create = () => {
  const [store, setStore] = useState({
    ProductName: "iphone",
    ProductPrice: "",
    desc: "",
    Image: "",
  });
  const handlechange=(e)=>{
    const{name,value}=e.target;
    setStore((prev)=>({
        ...prev,
        [name]:value
  }));
 
  };
    const handlesubmit = (e) => {
    e.preventDefault(); 
 
  };
  return (
    <div>
      <form onSubmit={handlesubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md space-y-5">
        <div>
          <label
            htmlFor="ProductName"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Product Name
          </label>
          <input
            type="text"
            onChange={handlechange}
            name="ProductName"
            id="ProductName"
            value={store.ProductName}
            placeholder="Enter product name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                 focus:ring-2 focus:ring-blue-500 focus:outline-none 
                 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="ProductPrice"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Product Price
          </label>
          <input
           onChange={handlechange}
            type="text"
            name="ProductPrice"
            id="ProductPrice"
            value={store.ProductPrice}
            placeholder="Enter product price"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                 focus:ring-2 focus:ring-blue-500 focus:outline-none 
                 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="desc"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Product Description
          </label>
          <textarea
            name="desc"
             onChange={handlechange}
            id="desc"
            value={store.desc}
            placeholder="Enter product description"
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                 focus:ring-2 focus:ring-blue-500 focus:outline-none 
                 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="Image"
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Product Image URL
          </label>
          <input
            type="text"
             onChange={handlechange}
            name="Image"
            id="Image"
            value={store.Image}
            placeholder="Enter product image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                 focus:ring-2 focus:ring-blue-500 focus:outline-none 
                 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Create;
