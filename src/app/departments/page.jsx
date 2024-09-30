import React from "react";
import ServiceHero from "../components/HospitalWeb/TemplateOne/Service/ServiceHero";
import { services } from "@/app/data/service";
import AllService from "../components/HospitalWeb/TemplateOne/Service/AllService";

export default function page() {
  return (
    <div>
      <ServiceHero />
      <div className="px-5  md:px-20 lg:px-40 xl:px-40">
        <AllService services={services} />
      </div>
    </div>
  );
}
