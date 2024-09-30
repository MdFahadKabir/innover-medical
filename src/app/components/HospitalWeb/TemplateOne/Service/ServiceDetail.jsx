"use client";
import Image from "next/image";
import React from "react";

export default function ServiceDetail({ name, description, imgSrc, altText }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between pb-20">
      <div className="w-full my-auto">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-roboto font-bold text-cublue pb-2 underline underline-offset-4">
          {name}
        </h1>
        {description && (
          <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base">
            {description}
          </p>
        )}
      </div>
      <div className="mx-10 mb-3 md:mb-0"></div>
      <div className="w-full">
        <Image
          src={imgSrc}
          width={600}
          height={337.5}
          className="w-full h-full rounded-3xl"
          alt={altText}
        />
      </div>
    </div>
  );
}
