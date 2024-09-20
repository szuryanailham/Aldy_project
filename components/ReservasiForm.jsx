import Image from "next/image";
import photo from "@/public/assets/images/reservasi.svg";
import { FaWhatsapp } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
const ReservasiForm = () => {
  return (
    <section id="Reservasi" className="w-full h-fit mt-5">
      {/* Title */}
      <h1 className="w-full text-center mx-auto text-[35px] font-light md:text-[70px] md:leading-none p-5">Reservasi Form</h1>

      {/* Content Wrapper */}
      <div className="max-w-screen-lg w-full h-fit mx-auto flex flex-col md:flex-row bg-[#031F28] shadow-lg rounded-lg p-10 gap-5">
        {/* Left Side */}
        <div className="w-full md:w-1/2 my-auto mx-auto">
          <Image src={photo} className="mx-auto mb-5" alt="Photo" />
          <h1 className="w-full md:w-[279px] text-[32px] md:text-[20px] leading-tight text-center mx-auto">“Abadikan setiap Moment berhargamu”</h1>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <form action="">
            {/* Name */}
            <div className="relative w-full">
              <input type="text" className="w-full px-10 py-3 bg-transparent text-white border border-[#D48319] rounded focus:outline-none" placeholder="Your Name" />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D48319]">
                {/* Icon here */}
                <BsFillPersonFill className="text-[#D48319]" />
              </span>
            </div>
            {/* Nomor HP */}
            <div className="relative w-full mt-5">
              <input type="text" className="w-full px-10 py-3 bg-transparent text-white border border-[#D48319] rounded focus:outline-none" placeholder="Number Phone" />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D48319]">
                {/* Icon here */}
                <FaWhatsapp className="text-[#D48319]" />
              </span>
            </div>
            {/* Category */}
            <div className="relative w-full mt-5">
              <select className="w-full px-10 py-3 bg-[#031F28] text-white border border-[#D48319] rounded focus:outline-none appearance-none">
                <option value="category1" className="bg-[#031F28]">
                  Wedding
                </option>
                <option value="category2" className="bg-[#031F28]">
                  Graduation
                </option>
                <option value="category3" className="bg-[#031F28]">
                  Event Documentation
                </option>
              </select>
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D48319]">
                {/* Custom Icon */}
                <FaCamera className="text-[#D48319]" />
              </span>
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#D48319]">
                {/* Dropdown Arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            {/* Date and time*/}
            <div className=" w-full flex gap-4 mt-5">
              {/* date */}

              <div className="relative w-1/2">
                <input type="date" className="w-full px-10 py-3 bg-transparent text-white border border-[#D48319] rounded focus:outline-none" placeholder="tanggal" />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D48319]">
                  {/* Icon here */}
                  <MdDateRange className="text-[#D48319]" />
                </span>
              </div>
              {/* Time */}
              <div className="relative w-1/2">
                <input type="time" className="w-full px-10 py-3 bg-transparent text-white border border-[#D48319] rounded focus:outline-none" placeholder="Time" />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D48319]">
                  {/* Icon here */}
                  <MdOutlineAccessTime className="text-[#D48319]" />
                </span>
              </div>
            </div>
            {/* Adress */}
            <div className="relative w-full mt-5">
              <textarea className="w-full px-10 py-3 bg-transparent text-white border border-[#D48319] rounded focus:outline-none" placeholder="Masukkan Detail lokasi" rows="5"></textarea>
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#D48319]">
                {/* Icon */}
                <FaLocationDot className="text-[#D48319]" />
              </span>
            </div>
            {/* button */}
            <div className="flex justify-between mt-5">
              <p>
                Atau hubungi{" "}
                <Link href="asas" className="text-[#D48319]">
                  Whatsapp
                </Link>
              </p>
              <button type="button" className="text-white bg-SecondColor font-medium rounded-lg text-sm px-5 py-2.5 mx-2 mb-2">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservasiForm;
