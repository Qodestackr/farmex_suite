// import React from 'react'
// import Link from 'next/link'

// function _404() {
//   return (
//     <div className="text-center">
//       <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
//       <p className="mb-4 text-lg text-gray-600">Oops! It seems like you&apos;ve taken a wrong turn.</p>
//       <div className="animate-bounce">
//         <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
//         </svg>
//       </div>

//       <p className="mt-4 text-gray-600">
//         <Link
//           href="/"
//           className="inline-flex items-center px-6 justify-center rounded-full bg-black mx-2 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-16 xl:px-18"
//         >
//           Go Back
//         </Link>
//       </p>
//     </div>

//   )
// }

// export default _404

import Image from 'next/image';
import React from 'react';

const Error10 = () => {
  return (
    <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="w-full lg:w-1/2">
        <Image
          className="hidden lg:block"
          src="https://i.ibb.co/v30JLYr/Group-192-2.png"
          alt=""
        />
        <Image
          className="hidden md:block lg:hidden"
          src="https://i.ibb.co/c1ggfn2/Group-193.png"
          alt=""
        />
        <Image
          className="md:hidden"
          src="https://i.ibb.co/8gTVH2Y/Group-198.png"
          alt=""
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
          Go back to Homepage
        </button>
      </div>
    </div>
  );
};

export default Error10;
