import React from 'react';
import { FaShippingFast, FaStar, FaTruck } from 'react-icons/fa';

export const PromationData = [
  {
    icon: <FaTruck />,
    title: 'Free Shipping',
    description: 'Enjoy free shipping on all orders with our special promotion.'
  },
  {
    icon: <FaStar />,
    title: 'Best Quality',
    description: 'Experience the best quality products that meet your expectations.'
  },
  {
    icon: <FaShippingFast />,
    title: 'Fast Delivery',
    description: 'Get your orders delivered quickly and efficiently with our fast delivery service.'
  }
];

function PromotionCard() {
  return (
    <>
      {PromationData.map((item, index) => (
        <div id='Promation' key={index} className="w-full m-2">
          <div className="bg-blue-900 text-white text-center p-5 mx-auto space-y-5 rounded-lg shadow-lg">
            <span className="text-4xl flex justify-center mb-2 animate-bounce duration-1000 ease-in-out">
              {item.icon}
            </span>
            <span className="text-2xl font-bold">{item.title}</span>
            <p className="text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default PromotionCard;
