import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { LinkWhatshapp } from "./constants";
LinkWhatshapp;
const Footer = () => {
  return (
    <div className="w-full p-5 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-center text-md ">
        Created by{" "}
        <a target="_blank" rel="noopener noreferrer" className="text-[#D48319]" href="https://www.ilhamsuryana.my.id">
          szuryanilham
        </a>
      </h1>

      <div className="mt-5 md:mt-0">
        <div className="flex gap-5 justify-center">
          {/* Instagram */}
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/szuryanilhm/">
            <FaInstagram className="text-lg md:text-xl" />
          </a>
          {/* Tiktok */}
          <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@szuryanilhm">
            <FaTiktok className="text-lg md:text-xl" />
          </a>
          {/* Whatsapp */}
          <a target="_blank" rel="noopener noreferrer" href={LinkWhatshapp}>
            <FaWhatsapp className="text-lg md:text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
