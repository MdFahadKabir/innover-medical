"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import HospitalImage1 from "@/app/public/HospitalImg1.jpg"; // Add other images if required
import HospitalImage2 from "@/app/public/HospitalImg2.jpg"; // Add other images if required

export default function HomepageHero() {
  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.3 }, // Delays for each word
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1 } },
  };

  const slides = [
    { img: HospitalImage1, text: "Keep Your Smile Clean & Shine" },
    { img: HospitalImage2, text: "Keep Your Heart Shine" },
    // Add more slides if necessary
  ];

  return (
    <div className="bg-aqua-400">
      <Swiper
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="relative border-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white rounded-t-[40px]"></div>

              <div className="absolute top-1/3 text-black w-full sm:w-2/3 md:w-1/2">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={headlineVariants}
                  custom={index}
                  className="md:text-7xl font-geist-mono font-bold"
                >
                  {slide.text.split(" ").map((word, i) => (
                    <motion.span key={i} variants={headlineVariants} custom={i}>
                      {word}{" "}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs sm:text-sm md:text-sm lg:text-sm font-geist-sans font-medium"
                >
                  Medicana provides comprehensive dental care services for the
                  whole family.
                </motion.p>

                <motion.button
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
                >
                  Make Appointment
                </motion.button>
              </div>

              <Image
                src={slide.img}
                width={1920}
                height={1080}
                className="w-auto h-auto md:w-full md:h-full rounded-t-[40px]"
                alt="Hospital Image"
                priority={true}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
