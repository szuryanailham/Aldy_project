import React from "react";
import about_image from "@/public/assets/images/about.svg";
import Image from "next/image";
import { aboutDesc } from "./constants";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <section className=" w-full mt-10 flex flex-col justify-center">
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
            <Link href="asasa">
              <FaInstagram className="text-2xl" />
            </Link>
            {/* Tiktok */}
            <Link href="asasa">
              <FaTiktok className="text-2xl" />
            </Link>
            {/* Facebook */}

            {/* Facebook */}
            <Link href="asasa">
              <FaFacebookF className="text-2xl" />
            </Link>
            <Link href="asasa">
              <FaGoogleDrive className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
