import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { LuHeartHandshake } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLocalHospital } from "react-icons/md";
import AboutCounter from "../AboutUs/AboutCounter";

export default function ChooseUs() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between xl:flex-row xl:justify-between mb-20">
        <div className="w-full my-auto mb-10 lg:mb-0 xl:mb-0">
          <p className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue pb-5 text-center lg:text-start xl:text-start">
            Why You Should Choose Our Dental Service?
          </p>
          <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base pb-5 text-center lg:text-start xl:text-start">
            Discover why our dental service stands out from the rest. From our
            experienced team to our state-of-the-art equipment, we provide
            exceptional care for all your dental needs.
          </p>
          <div>
            <AboutCounter />
          </div>
        </div>
        <div className="mx-10"></div>
        <div className="w-full bg-transparent md:bg-cublue rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
            <div className="bg-white shadow-lg rounded-3xl md:shadow-none md:rounded-none md:rounded-br-3xl l p-5">
              <GiReceiveMoney className="text-cusky text-4xl" />
              <p className="text-xl md:text-2xl lg:text-2xl font-roboto font-bold text-cublue py-3">
                Affordable Price
              </p>
              <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, adipisci!
              </p>
            </div>
            <div className="bg-cublue shadow-lg rounded-3xl md:shadow-none md:rounded-none md:bg-transparent  p-5">
              <GiReceiveMoney className="text-cusky text-4xl" />
              <p className="text-xl md:text-2xl lg:text-2xl font-roboto font-bold text-white py-3">
                Affordable Price
              </p>
              <p className="text-white font-poppins text-sm lg:text-base xl:text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, adipisci!
              </p>
            </div>

            <div className="bg-cublue shadow-lg rounded-3xl md:shadow-none md:rounded-none md:bg-transparent  p-5">
              <GiReceiveMoney className="text-cusky text-4xl" />
              <p className="text-xl md:text-2xl lg:text-2xl font-roboto font-bold text-white py-3">
                Affordable Price
              </p>
              <p className="text-white font-poppins text-sm lg:text-base xl:text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, adipisci!
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-3xl md:shadow-none md:rounded-none md:rounded-tl-3xl p-5">
              <GiReceiveMoney className="text-cusky text-4xl" />
              <p className="text-xl md:text-2xl lg:text-2xl font-roboto font-bold text-cublue py-3">
                Affordable Price
              </p>
              <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Fugiat, adipisci!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
