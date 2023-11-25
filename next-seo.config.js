import { DefaultSeo } from "next-seo";
const defaultSEOConfig = {
  title: "My Next.js Website",
  description: "This is my awesome Next.js website",
  canonical: "https://example.com",
};
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </>
  );
}

//https://www.bugpilot.io/guides/en/manage-seo-in-nextjs-with-next-seo-b0b9
