import { Metadata } from 'next';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import TableOne from '../../../components/Tables/TableOne';
import TableThree from '../../../components/Tables/TableThree';
import TableTwo from '../../../components/Tables/TableTwo';

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

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </>
  );
};

export default TablesPage;
