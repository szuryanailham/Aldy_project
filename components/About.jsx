import React from "react";
import about_image from "@/public/assets/images/about.svg";
import Image from "next/image";
import { aboutDesc } from "./constants";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const About = () => {
  return (
    <section className="mt-10 flex flex-col justify-center h-screen">
      {/* Title */}
      <h1
        className="text-[30px] w-[205px] text-center mx-auto 
      leading-10 mb-10"
      >
        About Muhammad Aldy
      </h1>
      {/* IMages */}
      <Image src={about_image} alt="About Section" className="mx-auto mb-10" />
      {/* About Description */}
      <div className="w-full flex justify-center">
        <p className="w-[250px] text-md mt-5 text-center">{aboutDesc}</p>
      </div>
      {/* social media */}
      <div className="w-fit flex flex-row mx-auto gap-5 mt-5">
        {/* instagram */}
        <Link href="asasa">
          <FaInstagram className="text-2xl" />
        </Link>
        {/* Tiktok */}
        <Link href="asasa">
          <FaTiktok className="text-2xl" />
        </Link>
        {/* Facebook */}
        <Link href="asasa">
          <FaFacebookF className="text-2xl" />
        </Link>
      </div>
    </section>
  );
};

export default About;
