import React from 'react';
import DashboardWelcomeBanner from '../../../components/Dashboard/_components/DashboardWelcomeBanner';
import ECommerce from '../../../components/Dashboard/E-commerce';
// import Datepicker from '../../../components/DatePicker/DatePicker';
// import MoreCropAnalyticsSidebarLinks from '../../../components/Sidebar/MoreCropAnalyticsSidebarLinks';

const CropAnalytics = () => {
  return (
    <div>
      <DashboardWelcomeBanner bannerText="Your Crop Management & Analytics Portal" />
      {/* <MoreCropAnalyticsSidebarLinks /> CropAnalytics... */}
      {/* <ECommerce /> */}

      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          Filter button
          {/* <FilterButton /> */}
          {/* <Datepicker /> */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg
              className="w-4 h-4 fill-current opacity-50 shrink-0"
              viewBox="0 0 16 16"
            >
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="hidden xs:block ml-2 text-secondary">
              Add view
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropAnalytics;
