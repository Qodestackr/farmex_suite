'use client';

import Image from 'next/image';
import React, { useState } from 'react';

function LandingHeroSection() {
  const [show, setShow] = useState(false);
  return (
    <div className="py-0 bg-gray-100 overflow-y-hidden">
      <div className="w-full px-6">
        <div className="mt-0 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
          <Image
            className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
            src=""
            alt="bg"
            width={10}
            height={10}
          />

          <Image
            className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
            width={10}
            height={10}
            src=""
            alt="bg"
          />
          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl text-center text-black font-bold leading-tight">
              Cloud-First End to End Farming Management Portal
            </h1>

            <p className='mt-5'>
              Farmex is a suite of modern farming tools powered by Cloud, GIS,
              Machine Learning, Professional Consultancy, and More.
            </p>
          </div>
          <div className="flex justify-center items-center mb-10 sm:mb-20">
            <button className="hover:text-success text-white hover:bg-transparent lg:text-xl hover:border-black border bg-success transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-black rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Get Started
            </button>
            <button className="hover:bg-successhover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-black hover:bg-indigo-700-800 rounded border border-black text-black px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
          <div className="relative sm:w-2/3 w-11/12">
            <Image
              src=""
              alt="Sample Page"
              role="Image"
              width={200}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingHeroSection;
