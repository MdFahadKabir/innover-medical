import React from "react";
import { FaUserDoctor, FaBedPulse } from "react-icons/fa6";
import { IoIosHappy } from "react-icons/io";

export default function AboutCounter() {
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <div className="text-center lg:text-start xl:text-start ">
          <FaUserDoctor className="text-cusky text-4xl mx-auto lg:mx-0 xl:mx-0" />
          <p className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue py-2">
            30 <span>+</span>
          </p>
          <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base ">
            Our Doctors
          </p>
        </div>
        <div className="text-center lg:text-start xl:text-start ">
          <FaBedPulse className="text-cusky text-4xl mx-auto lg:mx-0 xl:mx-0" />
          <p className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue py-2">
            83 <span>+</span>
          </p>
          <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base ">
            Clinic Rooms
          </p>
        </div>
        <div className="text-center lg:text-start xl:text-start ">
          <IoIosHappy className="text-cusky text-4xl mx-auto lg:mx-0 xl:mx-0" />
          <p className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue py-2">
            1766 <span>+</span>
          </p>
          <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base ">
            Happy Clients
          </p>
        </div>
      </div>
    </>
  );
}
