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
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={ele.productimage}
                alt
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {ele.productname}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {ele.productprice}
                </p>
              </div>
            </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
