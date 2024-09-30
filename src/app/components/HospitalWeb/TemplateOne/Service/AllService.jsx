"use client";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard";
import SearchBar from "./SearchBar";

export default function AllService({ services }) {
  const [filteredServices, setFilteredServices] = useState(services);
  const handleSearch = (query) => {
    if (!query) {
      setFilteredServices(services); // Reset if search query is empty
    } else {
      const filtered = services.filter((service) =>
        service.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredServices(filtered);
    }
  };
  return (
    <>
      <div>
        <SearchBar onSearch={handleSearch} />
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-20">
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                linkPath={`/departments/${service.path}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-lg md:text-2xl lg:text-2xl font-roboto font-bold text-red-600 ">
            Department name is wrong
          </p>
        )}
      </div>
    </>
  );
}
