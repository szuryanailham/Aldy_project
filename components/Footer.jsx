import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full p-5 flex justify-between items-center ">
      <h1 className="text-center text-sm">copyright@szuryanilham</h1>
      <div>
        <div className="w-fit flex flex-row mx-auto gap-5 mt-5">
          {/* instagram */}
          <Link href="asasa">
            <FaInstagram className="text-md" />
          </Link>
          {/* Tiktok */}
          <Link href="asasa">
            <FaTiktok className="text-md" />
          </Link>
          {/* Facebook */}
          <Link href="asasa">
            <FaFacebookF className="text-md" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
