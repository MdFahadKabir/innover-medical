import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceCard({ service, linkPath, isChild = false }) {
  const truncateText = (text, length) => {
    if (!text) return "";
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="w-full rounded-3xl bg-white/60 shadow-md hover:scale-90 duration-700">
      <Link href={linkPath}>
        <Image
          src={isChild ? service.childrenImg : service.parentImg}
          alt={service.name}
          width={600}
          height={337.5}
          className="w-full h-1/2 rounded-t-3xl object-cover"
        />
        <div className="p-5">
          <p className="text-lg md:text-2xl lg:text-2xl font-roboto font-bold text-cublue pb-2">
            {service.name}
          </p>
          <p className="text-cugray font-poppins text-sm lg:text-base xl:text-base">
            {truncateText(service.description, 100)}
          </p>
        </div>
      </Link>
    </div>
  );
}
