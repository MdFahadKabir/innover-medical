import Image from "next/image";
import React from "react";

export default function DoctorCard({ doctor }) {
  return (
    <div className="w-full border bg-cusky/30 shadow-md rounded-3xl p-5 hover:scale-90 duration-700">
      <div>
        <Image
          src={doctor.doctorImg}
          alt={doctor.name}
          width={300}
          height={300}
          className="rounded-full w-full h-full"
        />
      </div>
      <div className="">
        <p className="text-lg md:text-2xl lg:text-2xl font-roboto font-bold text-cublue pb-2">
          {doctor.name}
        </p>
        <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base pb-1">
          {doctor.degree}
        </p>
        <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base">
          {doctor.designation} ({doctor.institution})
        </p>
      </div>
    </div>
  );
}
