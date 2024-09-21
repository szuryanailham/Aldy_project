import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/6285853438903?text=Halo%21%20%F0%9F%91%8B%20Saya%20tertarik%20dengan%20jasa%20pembuatan%20website%20yang%20Anda%20tawarkan.%20%F0%9F%92%BB%20Apakah%20saya%20bisa%20mendapatkan%20informasi%20lebih%20lanjut%3F%20Saya%20ingin%20mendiskusikan%20kebutuhan%20dan%20konsep%20website%20yang%20ingin%20saya%20buat.%20Terima%20kasih%21%20%F0%9F%98%8A"
          >
            <FaWhatsapp className="text-lg md:text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
