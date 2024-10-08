import Image from "next/image";
import React from "react";
import { subTitle, Title } from "./constants";
const Hero = () => {
  return (
    <section id="Home" className="h-sreen w-full">
      <div className="background-image z-1"></div>
      <div></div>
      <h3 className="text-[#D48319] text-center md:text-end mt-3 mb-7 md:text-[24px]">#Best Photographer in Surakarta</h3>
      {/* IMAGE PROFILE */}
      <div className="px-10 md:flex item-center md:mt-10">
        <Image width={100} height={100} className="w-[250px] h-[350px] md:w-[405px] md:h-[463px] mx-auto mb-7" src="/assets/images/profile.webp" alt="Profile" />

        <div className="w-full md:h-[463px] md:mt-5">
          {/* TITLE AND SUBTITLE */}
          <h1 className="style_title w-[250px] md:w-[470px] text-titleColor">{Title}</h1>
          <p className=" w-[250px] md:w-[475px] text-md md:text-[22px] mt-5 md:mt-10 text-center md:text-right mx-auto font-light ">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
