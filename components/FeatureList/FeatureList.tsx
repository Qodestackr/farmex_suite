import React from 'react';

const featureList = [
  {
    title: 'Farm Management & Analytics',
    icon: '',
    description: `
    Plan it, create it, execute it. We offer a comprehensive resource management powered by key insights.
    We do not sell any data.
    Hit Your Productity Goals...
    `
  },
  {
    title: 'Legal & Consulatation',
    icon: '',
    description: `
    Our Team includes consulatation both from Agriculture and Legal team. Any plan includes this, no hidden charges. Check pricing and pricing calculator.
    `
  },
  {
    title: 'Farm Guard',
    icon: '',
    description: `
    The FarmGuard is the brain of the farm and shields the farm from any adverse conditions. 
    It combines data from our trademarked FarmSpears, GIS, Your data and checks if anything has exceeded the required 
    levels in the farm and if so, takes the necessary action to correct it. We do not sell any data.
    `
  },
  {
    title: 'Workflows Pro Tier',
    icon: '',
    description: `
    I struggled a lot when ordering farm inputs for my farm because it was difficult or expensive to get what I 
    needed but with Farmcloud, whenever I need seeds or farm inputs, I simply place the order on farmcloud and 
    they are delivered straight to my farm by an agronomist. The agronomist also takes time to check on the crop 
    and advise me on what inputs would be needed next to ensure maximum crop production.
    `
  },
  {
    title: 'Farm Management & Analytics',
    icon: '',
    description: `
    Plan it, create it, execute it. We offer a comprehensive resource management powered by key insights.
    Hit Your Productity Goals...
    `
  },
  {
    title: 'Diverse End To End Needs',
    icon: '',
    description: `
    FarmCloud  | FarmShield | Smart Greenhouses | Screenhouses
    NetHouses | Drip Kits |
    Herbs for Export | Logistics
    `
  }
];

export default function FeatureList() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Built To Meet Your Farming Needs & Eliminate Guesses.
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Farmex Suite brings a suite of Cloud-first Tech Solutions with
            innovation in Mind. From GIS-inclusive Analytics, Resource
            Management, Marketplaces, and Consultancy/ Compliance to increase
            your productivity and sales.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {featureList.map((feature, i) => (
            <div key={i}>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                {feature?.icon ? 'ICON' : 'ICON'}
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {feature?.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
