import React, { useState, useEffect } from 'react';
import { FcRating } from 'react-icons/fc';
import axios from 'axios';
import Button from './Button';
import { FcProcess } from "react-icons/fc";
const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API and update the state
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        // console.log(response.data);
        setProducts(response.data.products);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setProducts([]); // Set products to an empty array in case of an error
        setLoading(false); // Set loading to false after an error
      });
  }, []);

  return (
    <>
     {loading &&
      <div className='w-full text-9xl animate-spin col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4'>
        <FcProcess  className='mx-auto' />
        </div>
    }
      {products.map((product, index) => (
        <div id='Product' key={index} className="m-4  rounded overflow-hidden shadow-lg flex flex-col">
          <img
            className="w-full h-48 object-cover object-center hover:scale-110 duration-1000"
            src={product.images[0]}
            alt={product.title}
          />
          <div className="px-6 py-4 flex-grow">
            <div className="font-bold text-xl mb-2 text-center line-clamp-1">{product.title}</div>
            <p className="text-gray-700 font-semibold mb-2 line-clamp-2">{product.description}</p>
            {/* details */}

            <div className="mt-4 space-x-4">
              <span className="text-gray-500 font-bold"><s>${product.price}</s></span>
              <span className="text-gray-700 font-bold">${Math.round(product.price - (product.discountPercentage / 100) * product.price)}</span>
              <span className="text-green-500 font-bold ">{product.discountPercentage}% Off</span>
            </div>
            <div className='font-bold my-1'>Brand Name: {product.brand}</div>

            <div className="flex items-center space-x-1 font-bold text-orange-600">
                <FcRating />
                <span>{product.rating}/5</span>
              </div>


          </div>
          <div className="mx-auto py-4 ">
            <Button title={'Add to Cart'} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
