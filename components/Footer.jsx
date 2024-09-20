import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full p-5 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-center text-md ">
        copyright@
        <Link className="text-[#D48319]" href="">
          szuryanilham
        </Link>
      </h1>

      <div className="mt-5 md:mt-0">
        <div className="flex gap-5 justify-center">
          {/* Instagram */}
          <Link href="asasa">
            <FaInstagram className="text-lg md:text-xl" />
          </Link>
          {/* Tiktok */}
          <Link href="asasa">
            <FaTiktok className="text-lg md:text-xl" />
          </Link>
          {/* Facebook */}
          <Link href="asasa">
            <FaFacebookF className="text-lg md:text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
