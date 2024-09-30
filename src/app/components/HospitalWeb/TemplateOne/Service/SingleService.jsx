"use client";
import React, { useState } from "react";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import DoctorCard from "./DoctorCard";
import ServiceDetail from "./ServiceDetail";
import SearchBar from "./SearchBar";

export default function SingleService({ service, doctors }) {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);
  const [filteredChildren, setFilteredChildren] = useState(service.children);

  // Search handler for doctors
  const handleDoctorSearch = (query) => {
    if (!query) {
      setFilteredDoctors(doctors); // Reset if search query is empty
    } else {
      const filtered = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDoctors(filtered);
    }
  };

  // Search handler for child services
  const handleServiceSearch = (query) => {
    if (!query) {
      setFilteredChildren(service.children); // Reset if search query is empty
    } else {
      const filtered = service.children.filter((child) =>
        child.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredChildren(filtered);
    }
  };
  return (
    <>
      <Banner imgSrc={service.parentImg} service={service} />
      <div className="px-5  md:px-20 lg:px-40 xl:px-40 pb-20">
        <ServiceDetail
          name={service.name}
          description={service.description}
          imgSrc={service.parentImg}
          altText={service.name}
        />

        {service.children && (
          <>
            <h2 className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue pb-2 underline underline-offset-4 text-center md:text-start">
              Our {service.name} Department
            </h2>

            <SearchBar onSearch={handleServiceSearch} />
            {filteredChildren.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-20">
                {filteredChildren.map((child) => (
                  <ServiceCard
                    key={child.id}
                    service={child}
                    linkPath={`/departments/${service.path}/${child.path}`}
                    isChild
                  />
                ))}
              </div>
            ) : (
              <p className="text-lg md:text-2xl lg:text-2xl font-roboto font-bold text-red-600 ">
                You entered wrong Department name
              </p>
            )}
          </>
        )}
        {doctors && doctors.length > 0 && (
          <div className="pb-20">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue pb-2 underline underline-offset-4 text-center md:text-start">
              Our Doctors for {service.name}
            </h2>
            <SearchBar onSearch={handleDoctorSearch} />
            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-20">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            ) : (
              <p className="text-lg md:text-2xl lg:text-2xl font-roboto font-bold text-red-600 ">
                You entered wrong name
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
