import Head from "next/head";

import HomepageHero from "./components/HospitalWeb/TemplateOne/HomePage/HomepageHero";
import ChooseUs from "./components/HospitalWeb/TemplateOne/HomePage/ChooseUs";
import WhyUs from "./components/HospitalWeb/TemplateOne/AboutUs/WhyUs";
import Testimonial from "./components/HospitalWeb/TemplateOne/AboutUs/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Dynamic Title</title>
        <meta
          name="description"
          content="Welcome to the homepage of this dynamic app."
        />
        <meta
          name="keywords"
          content="nextjs, react, dynamic, head, metadata"
        />
      </Head>
      <HomepageHero />
      <div className="px-5  md:px-20 lg:px-40 xl:px-40">
        <ChooseUs />
        <WhyUs />
      </div>
      <Testimonial />
    </>
  );
}
