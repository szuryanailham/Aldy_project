"use client";
import Link from "next/link";
import { LinkWhatshapp, navLinks } from "./constants";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { FaInstagram, FaPinterest, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { useRef, useState } from "react";
const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef(null);
  const sidebarRef = useRef(null);
  return (
    <>
      <nav className="shadow-2xl bg-baseColor fixed md:sticky w-full z-[100] bg-BackgroundColor">
        <div className="max-w-screen-xl max-h-min flex flex-wrap items-center justify-between mx-auto py-4 px-7  z-[100">
          {/* LOGO NAV */}
          <h1 className="text-lg font-extrabold text-center py-2 leading-tight flex flex-col items-center">
            <span className="text-[#D48319]">Aldiwald</span>
            <span className="text-white text-sm tracking-wide">Project</span>
          </h1>

          {/* ITEM MENU */}
          <ul className="hidden md:flex flex-row justify-center space-x-12 p-3">
            {navLinks.map((item, id) => (
              <li key={id}>
                <Link href={item.id} className="cursor-pointer">
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <a target="_blank" rel="noopener noreferrer" href={LinkWhatshapp}>
                <FaWhatsapp className="text-2xl text-[#D48319]" />
              </a>
            </li>
          </ul>
          {/* BURGER MENU  */}
          <div
            onClick={() => {
              setIsActive((prev) => !prev);
            }}
            className="md:hidden text-4xl cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-250"
          >
            {isActive ? <IoMdClose className="w-7" /> : <MdMenu className="w-7" />}
          </div>
        </div>
      </nav>

      {/* ============= SIDEBAR ================= */}
      <div
        ref={sidebarRef}
        className={`${isActive ? "translate-y-0" : "-translate-y-full"}  fixed top-12 left-0 w-full h-fit bg-BackgroundColor flex flex-col p-2 py-3 md:hidden transition-transform duration-300 ease-in-out z-50 shadow-2xl`}
      >
        <ul className=" px-6 mt-3 divide-y divide-textColor">
          {navLinks.map((item, id) => (
            <li key={id} className="py-5">
              <Link href={item.id} smooth={true} duration={500} onClick={() => setIsActive(false)} className="hover:text-textColor cursor-pointer">
                {item.title}
              </Link>
            </li>
          ))}

          <li target="_blank" rel="noopener noreferrer" className="py-5 flex gap-5 text-[#D48319]">
            <a target="_blank" rel="noopener noreferrer" href=" http://instagram.com/aldiwald">
              <FaInstagram />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={LinkWhatshapp}>
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
