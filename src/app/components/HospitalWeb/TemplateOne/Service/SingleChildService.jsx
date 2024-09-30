"use client";
import React, { useState } from "react";
import Banner from "./Banner";
import DoctorCard from "./DoctorCard";
import ServiceDetail from "./ServiceDetail";
import SearchBar from "./SearchBar";

export default function SingleChildService({
  childService,
  doctors,
  parentService,
}) {
  if (!childService) {
    return <p>Service not found or no details available.</p>;
  }
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

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

  return (
    <>
      <Banner
        imgSrc={childService.childrenImg}
        service={childService}
        parentService={parentService}
      />
      <div className="px-5  md:px-20 lg:px-40 xl:px-40 pb-20">
        <ServiceDetail
          name={childService.name}
          description={childService.description}
          imgSrc={childService.childrenImg}
          altText={childService.name}
        />
        {doctors && doctors.length > 0 && (
          <div className="pb-20">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue pb-2 underline underline-offset-4 text-center md:text-start">
              Our Doctors for {childService.name}
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
