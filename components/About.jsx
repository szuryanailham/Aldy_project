import React from "react";
import about_image from "@/public/assets/images/about.svg";
import Image from "next/image";
import { aboutDesc } from "./constants";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";

const About = () => {
  return (
    <section id="About" className=" w-full mt-10 flex flex-col justify-center">
      {/* Title */}
      <h1
        className="style_title w-[250px] md:w-[500px] text-center md:text-left 
      leading-10 mb-10"
      >
        About Muhammad Aldy
      </h1>
      <div className="flex flex-col md:flex-row-reverse ">
        {/* IMages */}
        <Image src={about_image} alt="About Section" className="mx-auto mb-5 w-[237px] h-[277px] md:w-[328px] md:h-[384px]" />
        <div>
          {/* About Description */}
          <div className="w-full flex justify-center md:justify-start">
            <p className=" w-[250px] md:w-[475px] text-md md:text-[22px] mt-5 md:mt-10 text-center md:text-left mx-auto font-light ">{aboutDesc}</p>
          </div>
          {/* social media */}
          <div className=" w-fit md:w-full flex flex-row mx-auto gap-5 mt-10">
            {/* instagram */}
            <a href="asasa" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl" />
            </a>
            {/* Tiktok */}
            <a href="asasa" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="text-2xl" />
            </a>
            {/* Facebook */}

            {/* Facebook */}
            <a href="asasa" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-2xl" />
            </a>
            <a href="asasa" target="_blank" rel="noopener noreferrer">
              <FaGoogleDrive className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
