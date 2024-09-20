import About from "@/components/About";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import ReservasiForm from "@/components/ReservasiForm";
Gallery;
import React from "react";
const page = () => {
  return (
    <section>
      <Hero />
      <About />
      <Category />
      <Gallery />
      <ReservasiForm />
      <Offer />
      <Footer />
    </section>
  );
};

export default page;
