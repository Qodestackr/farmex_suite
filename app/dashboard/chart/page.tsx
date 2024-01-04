import FarmexRevenueChart from '../../../components/Charts/FarmexRevenueChart';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import FarmexProfitChart from '../../../components/Charts/FarmexProfitChart';
import FarmexVisitorAnalyticsChart from '../../../components/Charts/FarmexVisitorAnalyticsChart';
import FarmexVisitorAnalyticsFunnel from '../../../components/Charts/FarmexVisitorAnalyticsFunnel';

const Chart = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <div className="col-span-12">
          <FarmexVisitorAnalyticsChart />
        </div>
        <FarmexRevenueChart />
        <FarmexProfitChart />
        <FarmexVisitorAnalyticsFunnel />
      </div>
    </>
  );
};

export default Chart;
