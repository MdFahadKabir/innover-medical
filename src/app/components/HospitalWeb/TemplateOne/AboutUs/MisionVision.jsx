import React from "react";

export default function MisionVision() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
        <div className="bg-cusky-light rounded-2xl p-5">
          <p className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue pb-2">
            Our Vision
          </p>
          <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base ">
            To become a superior and trusted health service provider for all
            levels of society, in order to improve the quality of health
            services in this city.
          </p>
        </div>
        <div className="bg-cusky-light rounded-2xl p-5">
          <p className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue pb-2">
            Our Mision
          </p>
          <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base ">
            Promoting a culture of learning, innovation and continuous
            improvement and building centers of excellence with international
            standard health services.
          </p>
        </div>
      </div>
    </>
  );
}
