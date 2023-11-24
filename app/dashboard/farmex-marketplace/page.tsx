import React from 'react';
import ECommerce from '../../../components/Dashboard/E-commerce';
import DashboardWelcomeBanner from '../../../components/Dashboard/_components/DashboardWelcomeBanner';

export default function FarmexMarketplace() {
  return (
    <div>
      <DashboardWelcomeBanner bannerText="Your Marketplace Management Portal" />
      <ECommerce />
    </div>
  );
}
