"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { MdAddLocation } from "react-icons/md";

import medicana from "@/app/public/medicana.png";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const [secondaryDropdownOpen, setSecondaryDropdownOpen] = useState(null); // Track secondary dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Track mobile menu state

  const handleDropdownToggle = (link) => {
    setDropdownOpen(dropdownOpen === link ? null : link);
  };

  const handleSecondaryDropdownToggle = (link) => {
    setSecondaryDropdownOpen(secondaryDropdownOpen === link ? null : link);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeDropdowns = () => {
    setDropdownOpen(null);
    setSecondaryDropdownOpen(null);
  };
  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Departments",
      path: "/departments",
      children: [
        { name: "Consultation", path: "/departments/consultation" },
        {
          name: "Surgery",
          path: "/departments/surgery",
          children: [
            { name: "Cardiac Surgery", path: "/departments/surgery/cardiac" },
            { name: "Neuro Surgery", path: "/departments/surgery/neuro" },
          ],
        },
      ],
    },
    { name: "About Us", path: "/about" },
  ];

  return (
    <>
      <div className="bg-aqua-400">
        <div className=" text-white font-poppins text-xs py-5">
          <div className="px-5">
            <div className="flex flex-row sm:justify-between md:justify-between lg:justify-between xl:justify-between">
              <div className="flex flex-row">
                <div className="flex flex-row ">
                  <RiCustomerService2Fill className="my-auto" />
                  <p className="my-auto ml-1">2098203420-</p>
                </div>
                <div className="flex flex-row mx-3">
                  <IoMdCall className="my-auto" />
                  <p className="my-auto ml-1">2098203420-</p>
                </div>
                <div className="flex flex-row">
                  <MdAddLocation className="my-auto" />
                  <p className="my-auto ml-1">Chattagram, Pachlaish</p>
                </div>
              </div>
              <div className="flex flex-row">
                <a href="/" className="mx-1">
                  <FaFacebook />
                </a>
                <a href="/" className="mx-1">
                  <FaInstagram />
                </a>
                <a href="/" className="mx-1">
                  <FaWhatsapp />
                </a>
                <a href="/" className="mx-1">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar-web */}
        <nav className="relative">
          <div className="absolute z-20 w-full top-2">
            <div className="rounded-full bg-white mx-5 px-5 flex justify-between items-center">
              {/* Logo */}
              <Image
                src={medicana}
                alt="medicana.png"
                width={100}
                height={200}
                className="w-auto h-auto"
              />

              {/* Desktop Navbar Links */}
              <ul className="hidden lg:flex space-x-5">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleDropdownToggle(link.name)}
                    onMouseLeave={closeDropdowns}
                  >
                    <Link
                      href={link.path}
                      className={`hover:text-blue-600 ${
                        activeLink === link.name ? "text-blue-600" : ""
                      }`}
                      onClick={() => setActiveLink(link.name)}
                    >
                      {link.name}
                    </Link>

                    {/* Dropdown for Child Links */}
                    {link.children && (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(link.name)}
                          className="ml-2"
                        >
                          ▼
                        </button>
                        <AnimatePresence>
                          {dropdownOpen === link.name && (
                            <motion.ul
                              className="absolute top-full mt-2 bg-white rounded shadow-lg"
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                            >
                              {link.children.map((child, childIndex) => (
                                <li key={childIndex}>
                                  <Link
                                    href={child.path}
                                    className={`hover:text-blue-600 ${
                                      activeLink === child.name
                                        ? "text-blue-600"
                                        : ""
                                    }`}
                                    onClick={() => {
                                      setActiveLink(child.name);
                                      closeDropdowns(); // Close dropdown when clicking a child link
                                    }}
                                  >
                                    {child.name}
                                  </Link>

                                  {/* Secondary Dropdown for Child Links */}
                                  {child.children && (
                                    <>
                                      <div
                                      // onMouseEnter={() =>
                                      //   handleSecondaryDropdownToggle(
                                      //     child.name
                                      //   )
                                      // }
                                      // onMouseLeave={closeDropdowns}
                                      >
                                        <button
                                          onClick={() => {
                                            handleSecondaryDropdownToggle(
                                              child.name
                                            );
                                          }}
                                          className="ml-2"
                                        >
                                          →
                                        </button>
                                      </div>
                                      <AnimatePresence>
                                        {secondaryDropdownOpen ===
                                          child.name && (
                                          <motion.ul
                                            className="absolute top-0 left-full mt-2 bg-white rounded shadow-lg"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                          >
                                            {child.children.map(
                                              (secondary, secIndex) => (
                                                <li key={secIndex}>
                                                  <Link
                                                    href={secondary.path}
                                                    className={`hover:text-blue-600 ${
                                                      activeLink ===
                                                      secondary.name
                                                        ? "text-blue-600"
                                                        : ""
                                                    }`}
                                                    onClick={() => {
                                                      setActiveLink(
                                                        secondary.name
                                                      );
                                                      closeDropdowns(); // Close dropdown when clicking a child link
                                                    }}
                                                  >
                                                    {secondary.name}
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                          </motion.ul>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  )}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* Login and Appointment Buttons for Desktop */}
              <div className="hidden lg:flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Login
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Make Appointment
                </button>
              </div>

              {/* Hamburger Menu for Mobile */}
              <div className="lg:hidden">
                <button onClick={toggleMobileMenu}>
                  {mobileMenuOpen ? (
                    <FaTimes size={24} />
                  ) : (
                    <FaBars size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
        {/* navbar - mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-30 lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-5 space-y-5">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.path}
                      className={`block hover:text-blue-600 ${
                        activeLink === link.name ? "text-blue-600" : ""
                      }`}
                      onClick={() => {
                        setActiveLink(link.name);
                        setMobileMenuOpen(false); // Close menu after selection
                      }}
                    >
                      {link.name}
                    </Link>

                    {/* Dropdown for Child Links */}
                    {link.children && (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(link.name)}
                          className="ml-2"
                        >
                          ▼
                        </button>
                        <AnimatePresence>
                          {dropdownOpen === link.name && (
                            <motion.ul
                              className="ml-4 space-y-3"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                            >
                              {link.children.map((child, childIndex) => (
                                <li key={childIndex}>
                                  <Link
                                    href={child.path}
                                    className={`hover:text-blue-600 ${
                                      activeLink === child.name
                                        ? "text-blue-600"
                                        : ""
                                    }`}
                                    onClick={() => {
                                      setActiveLink(child.name);
                                      setMobileMenuOpen(false);
                                    }}
                                  >
                                    {child.name}
                                  </Link>

                                  {/* Secondary Dropdown for Child Links */}
                                  {child.children && (
                                    <>
                                      <button
                                        onClick={() =>
                                          handleSecondaryDropdownToggle(
                                            child.name
                                          )
                                        }
                                        className="ml-2"
                                      >
                                        →
                                      </button>
                                      <AnimatePresence>
                                        {secondaryDropdownOpen ===
                                          child.name && (
                                          <motion.ul
                                            className="ml-4 space-y-2"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -10 }}
                                          >
                                            {child.children.map(
                                              (secondary, secIndex) => (
                                                <li key={secIndex}>
                                                  <Link
                                                    href={secondary.path}
                                                    className={`hover:text-blue-600 ${
                                                      activeLink ===
                                                      secondary.name
                                                        ? "text-blue-600"
                                                        : ""
                                                    }`}
                                                    onClick={() => {
                                                      setActiveLink(
                                                        secondary.name
                                                      );
                                                      setMobileMenuOpen(false);
                                                    }}
                                                  >
                                                    {secondary.name}
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                          </motion.ul>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  )}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}

                {/* Login and Appointment Buttons for Mobile */}
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">
                    Login
                  </button>
                  <button className="w-full bg-green-500 text-white px-4 py-2 rounded">
                    Make Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
