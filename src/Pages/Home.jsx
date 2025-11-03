import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://6904bea06b8dabde4964f28c.mockapi.io/products"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex flex-wrap gap-10">
  {data.map((ele) => {
    return (
      <div key={ele.id}>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:shadow-md transition dark:border-gray-700 dark:bg-gray-800">
          {/* Product Image */}
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={ele.productimage}
            alt={ele.productname}
          />

          {/* Product Info */}
          <div className="flex flex-col justify-between p-4 leading-normal w-full">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {ele.productname}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ${ele.productprice}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ${ele.productdesc}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Edit
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

    </>
  );
};

export default Home;
