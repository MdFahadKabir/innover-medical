import { whyUsCard } from "@/app/data/whyUsCard";
import React from "react";
import Image from "next/image";
import { Meteors } from "../Shared/Meteors";
export default function WhyUs() {
  return (
    <>
      <div className="bg-cupink-light p-5 md:p-10 lg:p-10 xl:p-10 rounded-2xl mb-20">
        <div className="flex flex-col items-center mb-10">
          <p className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue py-2">
            Why Choose Us ?
          </p>
          <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base text-center">
            Discover why our dental service stands out from the rest. From our
            experienced team to our state-of-the-art equipment,<br></br> we
            provide exceptional care for all your dental needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {whyUsCard.map((card, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-3xl relative overflow-hidden cursor-pointer hover:scale-95 duration-700 "
            >
              <div>
                <Image
                  src={card.img}
                  alt={card.header}
                  width={20}
                  height={20}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-2xl font-roboto font-bold text-cublue py-2">
                {card.header}
              </h3>
              <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base">
                {card.description}
              </p>
              <div className="absolute top-0  z-10">
                <Meteors number={10} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
