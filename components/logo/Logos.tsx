import Image from 'next/image';
import React from 'react';

export const partnershipLogos = [
  {
    name: '',
    logo: ''
  },
  {
    name: '',
    logo: ''
  },
  {
    name: '',
    logo: ''
  },
  {
    name: '',
    logo: ''
  },
  {
    name: '',
    logo: ''
  }
];

function PartnershipLogos() {
  return (
    <div className="container mx-auto pt-16">
      <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
        <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">
          Notable Partners we Work With.
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque rem illum adipisci veritatis quisquam?
        </p>
      </div>
      <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
        <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
          {partnershipLogos.map((partner, i) => (
            <Image key={i} src="" alt="Logo 123" width={200} height={300} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnershipLogos;
