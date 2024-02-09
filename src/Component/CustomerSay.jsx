import React, { useEffect, useState } from 'react';
import { FcPrevious, FcNext } from 'react-icons/fc';
 const CustomerSays = [
  {
      id:'1',
      imageUrl: 'store.jpeg',
      customerName: 'Bibek',
      customerSaid: 'This app is to neat and clean and also user attractive'
  },
  {
      id:'2',
      imageUrl: 'store.jpeg',
      customerName: 'Santosh',
      customerSaid: 'This app is to neat and clean and also user attractive'
  },
  {
      id:'3',
      imageUrl: 'store.jpeg',
      customerName: 'Amrita',
      customerSaid: 'This app is to neat and clean and also user attractive'
  }
]

export default function CustomerSay() {
  const [slide, setSlide] = useState(0);
  
  const previousHandle = () => {
    setSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : CustomerSays.length - 1));
  };

  const nextHandle = () => {
    setSlide((prevSlide) => (prevSlide < CustomerSays.length - 1 ? prevSlide + 1 : 0));
  };

  return (
    <>
      <div id='Customer' className="flex justify-evenly items-center space-x-14 md:text-9xl text-5xl">
        <span className="hover:opacity-70 cursor-pointer"><FcPrevious onClick={previousHandle} /></span>
        <span className="">
          <img src={CustomerSays[slide].imageUrl} alt="" className="md:w-80 md:h-80 w-32 h-32 rounded-full" />
        </span>
        <span className="hover:opacity-70 cursor-pointer"><FcNext onClick={nextHandle} /></span>
      </div>
      <div className="text-center p-5">
        <div className="text-2xl md:text-4xl font-bold">{CustomerSays[slide].customerName}</div>
        <div className="text-lg md:text-xl">{CustomerSays[slide].customerSaid}</div>
      </div>
    </>
  );
}
