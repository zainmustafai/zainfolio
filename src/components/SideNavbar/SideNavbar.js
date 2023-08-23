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
      className={`fixed z-50 md:block md:static ${
        isSideNavbarOpen ? "top-0 left-0 " : "top-0 -left-full"
      } min-h-screen max-h-screen justify-between w-[250px] overflow-y-auto overflow-x-hidden text-black dark:text-white border-lightGray dark:border-darkBlue border-r-2 dark:border-r-darkGray bg-white dark:bg-black 
      transition-all duration-300 ease-in-out`}
    >
      <button
        onClick={isSideNavbarOpen ? closeSideNavbar : openSideNavbar} // Toggle between open and close
        className="p-4 bg-gray-900 block md:hidden text-white fixed top-8 right-4 z-50"
      >
        {isSideNavbarOpen ? "Close" : "Open"}
      </button>
      <figure className="w-full aspect-square border-b dark:border-dark p-6">
        <Image
          src={profileImage}
          alt="profile"
          className="w-full  rounded-full border-8 dark:border-dark grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
        />
      </figure>

      {/*Map through the navLinks array and render the links*/}
      <ul className="flex flex-col flex-1 text-center text-sm">
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
      <footer className="p-4 flex flex-col border-t text-center">
        <span className="text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://www.fiverr.com/zainmustafai"
            className="text-blue-500 underline"
          >
            Zain
          </a>{" "}
        </span>
        <span className="text-sm">© 2023 All rights reserved.</span>
      </footer>
    </aside>
  );
};

export default Sidenav;

// import React from "react";
// import Link from "next/link";

// const SideNavbar = ({ isOpen, onClose }) => {
//   return (
//     <div
//       className={`fixed z-[9999] inset-y-0 left-0 w-60 duration-300 ease-in-out bg-dark text-primary transform transition-all ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       <button onClick={onClose} className="absolute top-4 right-4 text-white">
//         Close
//       </button>
//       <nav className="p-4">
//         <ul className="space-y-4">
//           <li>
//             <Link href="/home">Home</Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//           <li>
//             <Link href="/resume">Resume</Link>
//           </li>
//           <li>
//             <Link href="/portfolio">Portfolio</Link>
//           </li>
//           <li>
//             <Link href="contact">Contact</Link>
//           </li>
//           {/* Add more links here */}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default SideNavbar;
