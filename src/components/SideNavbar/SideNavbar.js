"use client";
import React, { useState } from "react";
import profileImage from "./profile_picture.png";
import { navLinks } from "../../data/Datafile";
import Link from "next/link";
import Image from "next/image";

const Sidenav = () => {
  const [isSideNavbarOpen, setIsSideNavbarOpen] = useState(false); // Initialize as false
  const openSideNavbar = () => {
    setIsSideNavbarOpen(true);
  };

  const closeSideNavbar = () => {
    setIsSideNavbarOpen(false);
  };

  const [activeItem, setActiveItem] = useState("home");

  return (
    <aside
      className={`fixed z-50 flex flex-col md:static ${
        isSideNavbarOpen ? "top-0 left-0 h-screen " : "top-0 -left-full"
      }
      max-h-screen w-[250px] overflow-y-auto overflow-x-hidden
      
      text-black dark:text-white border-lightGray dark:border-darkBlue border-r-2 dark:border-r-darkGray bg-white dark:bg-black 
      transition-all duration-300 ease-in-out`}
    >
      <figure className="w-full aspect-square border-b dark:border-dark p-6">
        <Image
          src={profileImage}
          alt="Picture of the author"
          placeholder="blur"
          style={{ objectFit: "contain" }}
          loading="lazy"
          className="rounded-full border-8 w-full aspect-square dark:border-dark grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
      </figure>

      {/*Map through the navLinks array and render the links*/}
      <ul className="text-center flex-1">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="w-full hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-10 transition-all duration-100 ease-in-out"
          >
            <Link
              onClick={() => setActiveItem(item.title.toLowerCase())}
              href={`/${item.path}`}
              className={`
                w-full  block py-2
                ${
                  activeItem === item.title.toLocaleLowerCase()
                    ? "text-primary text-lg hover:text-primary transition-colors duration-300 font-semibold"
                    : "hover:text-primary font-semibold transition-colors duration-300"
                }`}
            >
              {item?.title?.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>

      <footer className="p-4 border-t text-center ">
        <span className="text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://www.fiverr.com/zainmustafai"
            className="text-blue-500 underline"
          >
            Zain
          </a>{" "}
        </span>
        <br />
        <span className="text-sm">© 2023 All rights reserved.</span>
      </footer>

      {/* This button is only visible on mobile screens */}
      <button
        onClick={isSideNavbarOpen ? closeSideNavbar : openSideNavbar} // Toggle between open and close
        className="p-4 opacity-25 bg-gray-900 block md:hidden text-white fixed top-8 right-4 z-50"
      >
        {isSideNavbarOpen ? "Close" : "Open"}
      </button>
    </aside>
  );
};

export default Sidenav;