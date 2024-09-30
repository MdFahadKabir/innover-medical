import React from "react";
import { testimonials } from "@/app/data/Testimonial";
import Image from "next/image";
export default function Testimonial() {
  return (
    <>
      <div className="relative overflow-hidden bg-white mb-20">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/65 via-transparent to-white/65 z-10" />

        <div className="flex animate-scroll">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  transition-transform duration-300 hover:scale-105 "
            >
              <div className="p-5 rounded-3xl shadow-md bg-gray-100 hover:bg-white transition duration-300 opacity-80 hover:opacity-100 mx-2">
                {testimonial.satisfaction.map(
                  (level, index) =>
                    level.status && (
                      <span
                        key={index}
                        className="text-xl md:text-2xl lg:text-2xl font-roboto font-bold text-cublue py-2"
                      >
                        {level.level} {/* Show the level label */}
                      </span>
                    )
                )}

                <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base py-3">
                  {testimonial.comment}
                </p>
                <div className="flex flex-row">
                  <div className="  my-auto">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-10 h-10 rounded-full mx-auto"
                    />
                  </div>
                  <div className="mx-2"></div>
                  <div className="w-full  text-cugray font-poppins text-sm lg:text-base xl:text-base">
                    <h3 className="font-bold text-black font-roboto">
                      {testimonial.name}
                    </h3>

                    <p className=" ">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate testimonials for infinite scrolling */}
          {testimonials.map((testimonial, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  transition-transform duration-300 hover:scale-105"
            >
              <div className="p-5 rounded-3xl shadow-md bg-gray-100 hover:bg-white transition duration-300 opacity-80 hover:opacity-100 mx-2">
                {testimonial.satisfaction.map(
                  (level, index) =>
                    level.status && (
                      <span
                        key={index}
                        className="text-xl md:text-2xl lg:text-2xl font-roboto font-bold text-cublue py-2"
                      >
                        {level.level} {/* Show the level label */}
                      </span>
                    )
                )}

                <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base py-3">
                  {testimonial.comment}
                </p>
                <div className="flex flex-row">
                  <div className="  my-auto">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-10 h-10 rounded-full mx-auto"
                    />
                  </div>
                  <div className="mx-2"></div>
                  <div className="w-full  text-cugray font-poppins text-sm lg:text-base xl:text-base">
                    <h3 className="font-bold text-black font-roboto">
                      {testimonial.name}
                    </h3>

                    <p className=" ">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
