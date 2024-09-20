import React from "react";
import { GalleryDesc } from "./constants";
import BlurFade from "@/components/magicui/blur-fade";
const Gallery = () => {
  const images = Array.from({ length: 9 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
  });
  return (
    <section className="mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center p-5">
        {/* Title */}
        <h1 className="w-[205px] style_title">Category</h1>

        <div className="w-full flex justify-end">
          {/* Description */}
          <p className="w-[250px] md:w-[599px] text-md md:text-[22px] mt-5 md:mt-10 text-center md:text-right mx-auto font-light">{GalleryDesc}</p>
        </div>
      </div>
      <div id="photos">
        <div className="columns-2 gap-4 sm:columns-3 p-2">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img className="mb-4 size-full rounded-lg object-contain" src={imageUrl} alt={`Random stock image ${idx + 1}`} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
