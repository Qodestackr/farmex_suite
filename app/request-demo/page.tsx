import { Metadata } from 'next';

export const metadata: Metadata &
  Record<string, any> /**to include an image */ = {
  title: 'Farmex Cloud | Farming Software and Tools',
  description:
    'Synnefa offers smart and comprehensive farming tools for the modern farmer. Explore our marketplace and discover top-quality farming software and products.',
  keywords: [
    'farming software',
    'agricultural tools',
    'modern farming',
    'farm management',
    'agtech marketplace'
  ],
  image: '/path/to/your/image.jpg',
  url: 'https://www.yourfarmexcloudwebsite.com',
  author: 'FarmexCloud Team',
  twitterUsername: '@FarmexCloud',
  facebookAppID: '1234567890',
  type: 'website',
  locale: 'en_US',
  siteName: 'Farmex Cloud',
  farmexGIS: {
    description: 'Empowering Agriculture Through Geospatial Intelligence',
    highlights: [
      'Advanced GIS solutions tailored for the agriculture industry',
      'Spatial analysis for optimized crop planning and yield forecasting',
      'Precision agriculture techniques for resource-efficient farming',
      'Integration of satellite imagery and IoT data for real-time insights',
      'Custom mapping and visualization tools for farm management'
    ],
    expertise: [
      'GIS development',
      'Geospatial analysis',
      'Precision agriculture',
      'Remote sensing'
    ],
    caseStudies: [
      {
        title: 'Optimizing Crop Rotation',
        description:
          'Implemented GIS-based crop rotation strategies resulting in increased soil fertility and crop yield.'
      },
      {
        title: 'IoT Integration for Precision Farming',
        description:
          'Utilized GIS and IoT technologies to enable precision agriculture, optimizing resource usage.'
      }
    ],
    contact: {
      email: 'gis@farmexcloud.com',
      phone: '+1234567890',
      website: 'https://www.farmexcloud.com/gis'
    }
  },

  farmexConsultancy: {
    description:
      'Farmex Consultancy specializes in Geographic Information Systems (GIS) development for the agriculture sector. We provide cutting-edge solutions to optimize farming processes and enhance agricultural productivity.',
    services: [
      'GIS development',
      'Spatial analysis',
      'Precision agriculture',
      'Farm management solutions'
    ],
    contact: {
      email: 'info@farmexconsultancy.com',
      phone: '+1234567890',
      website: 'https://www.farmexconsultancy.com'
    }
  }
};

const RequestDemoForm = () => {
  return (
    <>
      <div className="">
        {' '}
        {/**grid grid-cols-1 gap-9 sm:grid-cols-2 */}
        <div className="flex flex-col gap-9">
          {/* <!-- Request Demo with Farmex Cloud Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Request Demo with Farmex Cloud
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Name Of Your Business <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter name of Your Farm or whatever.."
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                {/* Size of the Biz :: What You Actually Farm ...etc */}

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    What is it your&apos;re looking for?
                  </label>
                  <input
                    type="text"
                    placeholder="Type Your Subject..."
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    What is Your Main Product of Focus?
                  </label>
                  <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                      <option value="">Farm Cloud Integration Suite</option>
                      <option value="">
                        Farm Management /Production Yields
                      </option>
                      <option value="">Farmex Marketplace</option>
                      <option value="">Other</option>
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    What are Your Interests with Farmex Cloud?
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Request Product Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDemoForm;
