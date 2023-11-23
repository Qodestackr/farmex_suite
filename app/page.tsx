import { Metadata } from "next";
import Link from "next/link";
import ModalVideo from "../components/modalVideo/ModalVideo";
import PartnershipLogos from "../components/logo/Logos";
import SubscribeNewsletter from "../components/newsletter/SubscribeNewsletter";
import IndustryStats from "../components/IndustryStats/IndustryStats";
import LandingHeroSection from "../components/Hero/HeroSection";
import FeatureList from "../components/FeatureList/FeatureList";
import DefaultTable from "../components/Tables/DefaultTable";
import Th from "../components/Tables/Th";
import CookiesBanner from "../components/CookiesBanner/CookiesBanner";
import CardDataStats from "../components/CardDataStats";
import WriteAComment from "../components/write-a-comment";

export const metadata: Metadata & Record<string, any> /**to include an image */ = {
  title: "Farmex Cloud | Farming Software and Tools",
  description: "Synnefa offers smart and comprehensive farming tools for the modern farmer. Explore our marketplace and discover top-quality farming software and products.",
  keywords: ["farming software", "agricultural tools", "modern farming", "farm management", "agtech marketplace"],
  image: "/path/to/your/image.jpg",
  url: "https://www.yourfarmexcloudwebsite.com",
  author: "FarmexCloud Team",
  twitterUsername: "@FarmexCloud",
  facebookAppID: "1234567890",
  type: "website",
  locale: "en_US",
  siteName: "Farmex Cloud",
  farmexGIS: {
    description: "Empowering Agriculture Through Geospatial Intelligence",
    highlights: [
      "Advanced GIS solutions tailored for the agriculture industry",
      "Spatial analysis for optimized crop planning and yield forecasting",
      "Precision agriculture techniques for resource-efficient farming",
      "Integration of satellite imagery and IoT data for real-time insights",
      "Custom mapping and visualization tools for farm management",
    ],
    expertise: ["GIS development", "Geospatial analysis", "Precision agriculture", "Remote sensing"],
    caseStudies: [
      {
        title: "Optimizing Crop Rotation",
        description: "Implemented GIS-based crop rotation strategies resulting in increased soil fertility and crop yield.",
      },
      {
        title: "IoT Integration for Precision Farming",
        description: "Utilized GIS and IoT technologies to enable precision agriculture, optimizing resource usage.",
      },
    ],
    contact: {
      email: "gis@farmexcloud.com",
      phone: "+1234567890",
      website: "https://www.farmexcloud.com/gis",
    },
  },

  farmexConsultancy: {
    description: "Farmex Consultancy specializes in Geographic Information Systems (GIS) development for the agriculture sector. We provide cutting-edge solutions to optimize farming processes and enhance agricultural productivity.",
    services: ["GIS development", "Spatial analysis", "Precision agriculture", "Farm management solutions"],
    contact: {
      email: "info@farmexconsultancy.com",
      phone: "+1234567890",
      website: "https://www.farmexconsultancy.com",
    },
  },
};


export default function Home() {
  return (
    <>
    <LandingHeroSection />
      {/* <ModalVideo thumb={"/"} thumbWidth={7} thumbHeight={10} thumbAlt={"Modal Video"} video={""} videoWidth={30} videoHeight={40} /> */}
    
    <FeatureList />
    {/* Industry Stats */}
    <IndustryStats />

    {/* <CookiesBanner /> */}
    <CardDataStats title={"Title"} total={"199"} rate={"6"} children={undefined} />
    <PartnershipLogos />

    <SubscribeNewsletter />
    

    {/* Components */}
    <DefaultTable />
    
    <Th />
    <WriteAComment />

    
    </>
  );
}
