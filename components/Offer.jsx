import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { LinkWhatshapp } from "./constants";
const Offer = () => {
  return (
    <section id="header" className="h-screen flex items-center justify-center">
      <BlurFade delay={0.25} inView>
        <h2 className=" text-[35px] md:text-[90px] text-center py-10 px-5 w-full mx-auto leading-tight">Biarkan lensa ini menangkap cerita terindahmu</h2>
        <div className="flex justify-center">
          <button type="button" className="text-white bg-SecondColor font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2">
            <a href={LinkWhatshapp}>Contact Me</a>
          </button>
        </div>
      </BlurFade>
    </section>
  );
};

export default Offer;
