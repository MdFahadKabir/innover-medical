import React from "react";
import AboutusHero from "../components/HospitalWeb/TemplateOne/AboutUs/AboutusHero";
import WhyUs from "../components/HospitalWeb/TemplateOne/AboutUs/WhyUs";
import Testimonial from "../components/HospitalWeb/TemplateOne/AboutUs/Testimonial";

export default function page() {
  return (
    <>
      <AboutusHero />
      <div className="px-5  md:px-20 lg:px-40 xl:px-40">
        <WhyUs />
      </div>
      <Testimonial />
    </>
  );
}
