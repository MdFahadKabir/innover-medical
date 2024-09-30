import React from "react";
import Image from "next/image";
import aboutusimg from "@/app/public/aboutus.jpg";
import aboutusimg2 from "@/app/public/aboutus2.jpg";
import AboutCounter from "./AboutCounter";
import MisionVision from "./MisionVision";

export default function AboutusHero() {
  return (
    <>
      <div>
        <div className="relative ">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white border-white border-b-2"></div>

          <div className="absolute top-1/3 text-white w-full sm:w-2/3 md:w-1/2 px-5  md:px-20 lg:px-40 xl:px-40">
            <p className="md:text-7xl font-geist-mono font-bold tracking-tighter">
              About Us
            </p>
          </div>

          <div className="h-40 md:h-[30rem] overflow-hidden">
            <Image
              src={aboutusimg}
              width={1920}
              height={1080}
              className=" w-auto h-auto  rounded-t-[40px]"
              alt="Hospital Image"
            />
          </div>
        </div>
        <div className="px-5  md:px-20 lg:px-40 xl:px-40">
          <div className="flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between mb-20">
            <div className="w-full my-auto">
              <Image
                src={aboutusimg2}
                width={400}
                height={400}
                className=" w-auto h-auto  rounded-3xl "
                alt="Hospital Image"
              />
            </div>
            <div className="md:mx-5 lg:mx-10"></div>
            <div className="w-full my-auto">
              <p className="text-cublue font-geist-sans font-bold text-xl  md:text-xl lg:text-4xl xl:text-4xl py-3">
                We are experienced and internationally certified dentist
              </p>
              <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base text-justify pb-3">
                This team includes dentists, dental hygienists, dental
                assistants, and administrative staff who work together to
                deliver personalized care and ensure that patients receive
                high-quality treatment in a safe and comfortable environment.
              </p>
              <div className="hidden lg:block xl:block">
                <AboutCounter />
              </div>
            </div>
          </div>
          <div className="block lg:hidden xl:hidden mb-20">
            <AboutCounter />
          </div>
          <div className="mb-20">
            <MisionVision />
          </div>
        </div>
      </div>
    </>
  );
}
