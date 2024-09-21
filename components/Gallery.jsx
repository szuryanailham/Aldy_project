import React from "react";
import { GalleryDesc } from "./constants";
import BlurFade from "@/components/magicui/blur-fade";
const Gallery = () => {
  const galleryArray = [
    {
      id: "1",
      title: "gallery_1",
      image: "/assets/images/gallery/photo1.webp",
    },
    {
      id: "2",
      title: "gallery_2",
      image: "/assets/images/gallery/photo2.webp",
    },
    {
      id: "3",
      title: "gallery_3",
      image: "/assets/images/gallery/photo3.webp",
    },
    {
      id: "4",
      title: "gallery_4",
      image: "/assets/images/gallery/photo4.webp",
    },
    {
      id: "5",
      title: "gallery_5",
      image: "/assets/images/gallery/photo5.webp",
    },
    {
      id: "gallery_6",
      title: "gallery_6",
      image: "/assets/images/gallery/photo6.webp",
    },
    {
      id: "gallery_7",
      title: "gallery_7",
      image: "/assets/images/gallery/photo7.webp",
    },
    {
      id: "8",
      title: "gallery_8",
      image: "/assets/images/gallery/photo8.webp",
    },
  ];

  return (
    <section id="Portofolio" className="mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center p-5">
        {/* Title */}
        <h1 className="w-[205px] style_title">Portofolio</h1>

        <div className="w-full flex justify-end">
          {/* Description */}
          <p className="w-[250px] md:w-[599px] text-md md:text-[22px] mt-5 md:mt-10 text-center md:text-right mx-auto font-light">{GalleryDesc}</p>
        </div>
      </div>
      <div id="photos">
        <div className="columns-2 gap-4 sm:columns-3 p-2">
          {galleryArray.map((imageUrl, idx) => (
            <BlurFade key={imageUrl.id} delay={0.25 + idx * 0.05} inView>
              <img className="mb-4 size-full rounded-lg object-contain" src={imageUrl.image} alt={imageUrl.title}/>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
