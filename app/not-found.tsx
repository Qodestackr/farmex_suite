import Image from 'next/image';
import React from 'react';

const Error10 = () => {
  return (
    <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="w-full lg:w-1/2">
        <Image
          className="hidden lg:block"
          src=""
          alt=""
          width={200}
          height={300}
        />
        <Image
          className="hidden md:block lg:hidden"
          src=""
          alt=""
          width={200}
          height={300}
        />
        <Image
          className="md:hidden"
          src=""
          alt=""
          width={200}
          height={300}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
          Looks like you&apos;ve found the doorway to the great nothing
        </h1>
        <p className="py-4 text-base text-gray-800">
          The content you&apos;re looking for doesn&apos;t exist. Either it was
          removed, or you mistyped the link.
        </p>
        <p className="py-2 text-base text-gray-800">
          Sorry about that! Please visit our hompage to get where you need to
          go.
        </p>
        <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-black text-whiter hover:bg-black 0 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error10;
