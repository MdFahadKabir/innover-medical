import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner({ imgSrc, service, parentService }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white border-white border-b-2"></div>

      {imgSrc && (
        <>
          <div className="absolute top-1/3 text-white w-full sm:w-2/3 md:w-1/2 px-5 md:px-20 lg:px-40 xl:px-40">
            <p className="md:text-7xl font-geist-mono font-bold tracking-tighter text-cublue">
              <Link href="/departments">Our Department/</Link>
              {parentService ? (
                <Link href={`/departments/${parentService.path}`}>
                  {parentService.name}/
                </Link>
              ) : null}
              {service.name || "Unknown Service"}
            </p>
          </div>
          <div className="h-40 md:h-[30rem] overflow-hidden">
            <Image
              src={imgSrc}
              width={1920}
              height={1080}
              className="w-auto h-auto rounded-t-[40px]"
              alt={service.name}
            />
          </div>
        </>
      )}
    </div>
  );
}
