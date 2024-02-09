import React from 'react';
import Button from './Button';

export default function HeroSection() {
  return (
    <div id='Home' className="relative md:flex md:items-center w-full">
      {/* Background Image */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="Hero-bg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-y-0 left-0 flex items-center text-white w-full p-4 md:w-2/3 md:p-10">
        <div className="space-y-4  text-left">
          <div className="font-bold">
            <span className="text-2xl md:text-4xl text-orange-600 block">
              Sale 20% Off
            </span>
            <span className="text-2xl md:text-4xl text-black block">
              On Everything
            </span>

            <p className="text-black my-3 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad architecto obcaecati quaerat laudantium
              tempore atque recusandae et modi! Reprehenderit aperiam fugiat eos quibusdam quae aspernatur, dignissimos sequi earum nesciunt.
              Consequatur, optio! Aspernatur magni, aliquam tenetur officia, laboriosam nostrum vel mollitia minima corrupti vitae tempore
              doloremque velit culpa consequuntur ex voluptate sint facere soluta. Vel aliquid aut harum delectus voluptatum?
            </p>
          </div>
          <div className="text-center md:text-left">
            <Button title={'Live Website'} to='/About'/>
          </div>
        </div>
      </div>
    </div>
  );
}
