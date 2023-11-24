'use client';
import React from 'react';
// import { VectorMap } from "@react-jvectormap/core";
// import { usAea } from "@react-jvectormap/unitedstates";

/***
 * The decision to temporarily disable the use of @react-jvectormap 
 * library is driven by the desire to explore and implement a more 
 * robust and feature-rich solution for sophisticated mapping in 
 * the Farmex Cloud Admin application.
 * 
 * TODO: Bring in a more advanced mapping library that better aligns 
 * with the project's evolving requirements and provides enhanced 
 * capabilities for GIS (Geographic Information Systems) functionalities, 
 * ensuring a seamless and optimized user experience.
    Looking for alternatives that offer:
     - Advanced features for sophisticated mapping requirements.
     - Better performance and optimization for large datasets.
     - Active community support and ongoing development.
 */

const MapOne = () => {
  return (
    <div
      className={`col-span-12 rounded-sm border border-stroke 
    bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark 
    xl:col-span-7 flex justify-center items-center`}
    >
      {/* TODO, Remove Flex when adding Features*/}

      {/**
 *       <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Region labels
      </h4>
      <div id="mapOne" className="mapOne map-btn h-90">
        <VectorMap
          map={usAea}
          backgroundColor="white"
          regionStyle={{
            initial: {
              fill: "#D1D5DB",
            },
            hover: {
              fillOpacity: 1,
              fill: "blue",
            },
            selected: {
              fill: "#FFFB00",
            },
          }}
          onRegionTipShow={function reginalTip(event, label, code) {
            //@ts-ignore
            return label.html(`
                  <div style="background-color: #F8FAFC; color: black; padding: 2px 8px"; >
                    ${
                      //@ts-ignore
                      label.html()
                    }
                  </div>`);
          }}
        />
      </div>
 */}
      <p className="text-xl font-semibold text-black dark:text-white">
        GIS POWERED SALES AND PERFORMANCE INSIGHTS
      </p>
    </div>
  );
};

export default MapOne;
