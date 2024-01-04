'use client';

import { useState } from 'react';

interface PricingTabProps {
  yearly: boolean;
  popular?: boolean;
  planName: string;
  price: {
    monthly: number;
    yearly: number;
  };
  planDescription: string;
  features: string[];
}

function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full ${props.popular ? 'dark' : ''}`}>
      <div className="relative flex flex-col h-full p-6 rounded-2xl  dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
        {props.popular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs bg-primary text-white font-semibold p-2 rounded-full shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
            {props.planName}
          </div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
              KES.{' '}
            </span>
            <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
              {props.yearly ? props.price.yearly : props.price.monthly}
            </span>
            <span className="text-slate-500 font-medium">
              {props?.yearly ? ' /yr' : ' /mo'}
            </span>
          </div>
          <div className="text-sm text-slate-500 mb-5">
            {props.planDescription}
          </div>
          <a
            className="w-full bg-[#096328] text-white inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-3 text-sm font-medium  shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
            href="/"
          >
            Purchase Plan
          </a>
        </div>
        <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
        Access Exclusive:
        </div>
        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default function PricingTable() {
  const [yearly, setYearly] = useState<boolean>(true);

  return (
    <div>
      <div className="flex justify-center  max-w-[14rem] m-auto mb-8 lg:mb-16 ">
        <div className="relative  flex w-full p-1  dark:bg-slate-900 rounded-full">
          <span
            className="absolute inset-0 m-1 pointer-events-none"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${
                yearly ? 'translate-x-0' : 'translate-x-full'
              }`}
            ></span>
          </span>
          <button
            className={`mx-1 relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              yearly
                ? 'bg-success text-white'
                : 'bg-primary text-slate-500 dark:text-slate-400 text-white'
            }`}
            onClick={() => setYearly(true)}
            // aria-pressed={isAnnual}
          >
            Yearly{' '}
            <span
              className={`${
                yearly
                  ? 'text-indigo-200 '
                  : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              -20%
            </span>
          </button>
          <button
            className={`mx-1 relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              yearly
                ? 'text-slate-500 dark:text-slate-400 bg-primary text-white'
                : 'bg-success text-white'
            }`}
            onClick={() => setYearly(false)}
            // aria-pressed={isAnnual}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
        <PricingTab
          yearly={yearly}
          planName="Harvest Precision"
          price={{ yearly: 6800, monthly: 780 }}
          planDescription={`The Harvest Pro Complete plan encompasses All-In-One farm management, integrated Marketplace access, and fundamental Analytics. Tailored for farms seeking a comprehensive solution for efficiency and growth.`}
          features={[
            'All-In-One farm management',
            'Integrated Marketplace access',
            'Fundamental Analytics',
            'Real-time Crop Health Monitoring',
            'Cost-Effective Scouting Solutions',
            'Efficient Soil Testing',
            'Optimized Seed and Fertilizer Usage'
          ]}
        />

        <PricingTab
          yearly={yearly}
          popular={true}
          planName="EcoTech AgriSuite"
          price={{ yearly: 9400, monthly: 920 }}
          planDescription={`Unleash the full potential of precision agriculture with EcoTech AgriSuite. Enjoy all the features of Harvest Precision, plus advanced energy management, sustainability solutions, and end-to-end workflows. Crafted for farms seeking a comprehensive, eco-friendly approach to modern agriculture.`}
          features={[
            'All features in Harvest Precision plan',
            'Advanced Energy Management',
            'Sustainability Solutions',
            'End-to-End Workflows',
            'Enhanced Precision Farming Tools',
            'Eco-Friendly Crop Advisories',
            'Carbon Footprint Tracking'
          ]}
        />

        <PricingTab
          yearly={yearly}
          planName="Precision Elite"
          price={{ yearly: 12000, monthly: 1350 }}
          planDescription={`Elevate your farm's precision and efficiency with the Precision Elite plan. This top-tier offering includes advanced GIS, Machine Learning capabilities, and expanded custom storage options. Crafted for farms demanding the highest level of technology and customization.`}
          features={[
            'All previous features & benefits',
            'Advanced GIS',
            'Machine Learning Capabilities',
            'Expanded Custom Storage Options',
            'Tailored Technology Solutions',
            'Data-Driven Sustainability',
            'Expert Consultation Access'
          ]}
        />
      </div>
    </div>
  );
}
