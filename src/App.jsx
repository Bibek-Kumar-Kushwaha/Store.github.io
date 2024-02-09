import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomerSay from './Component/CustomerSay';
import { CustomerSays } from './Component/CustomerSaysData';
import Footer from './Component/Footer';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import PromotionCard from './Component/PromotionCard';
import ProductCard from './Component/ProductCard';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API and update the state
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setProducts([]);
      });
  }, []);

  return (
    <>
      <div className=" w-full">
        <Navbar />
        <Hero />
        <div className="w-full my-6">
          <div className="md:flex justify-around items-center w-[80%] mx-auto">
            <PromotionCard />
          </div>
        </div>
        <div className="bg-gray-300 p-4">
          <CustomerSay CustomerSays={CustomerSays} />
        </div>
        <div className="w-full my-6 mx-auto ">
          <div className="font-bold text-2xl md:text-4xl text-center">OUR PRODUCTS</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[80%] mx-auto">
            <ProductCard products={products} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}