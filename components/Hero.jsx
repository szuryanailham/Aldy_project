import Image from "next/image";
import React from "react";
import profile from "@/public/assets/images/profile.svg";
import { subTitle, Title } from "./constants";
const Hero = () => {
  return (
    <section className="h-sreen">
      <div className="background-image z-1"></div>
      <div></div>
      <h3 className="text-SecondColor text-center md:text-end mt-3 mb-7">Best Photographer in Surakarta</h3>
      {/* IMAGE PROFILE */}
      <div className="px-10">
        <Image className="w-[250px] h-[250px] mx-auto mb-7" src={profile} alt="Profile" />
        <h1 className="text-[35px] w-[250px] text-center mx-auto leading-10">{Title}</h1>
        <div className="w-full flex justify-center">
          <p className=" w-[250px] text-md  mt-5 text-center">{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
