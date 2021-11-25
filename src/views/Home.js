import React from "react";
import Navbar from "../sections/Navbar";
import HeroHome from "../sections/HeroHome";
import NuestrosServicios from "../sections/NuestrosServicios";
import Banner from "../sections/Banner";
import TestimonialsHome from "../sections/TestimonialsHome";
import ComoFunciona from "../sections/ComoFunciona";
import Beneficios from "../sections/Beneficios";
import NuestrosEspecialistas from "../sections/NuestrosEspecialistas";
import Newsletter from "../sections/Newsletter";
import EresEspecialista from "../sections/EresEspecialista";
import Footer from "../sections/Footer";

const Home = () => {
    return (
      <>
      <div className="bg-gradient">
        <Navbar />
        <HeroHome />
      </div>
      <NuestrosServicios />
      <Banner />
      {/* <TestimonialsHome /> */}
      <ComoFunciona />
      <Beneficios />
      <NuestrosEspecialistas />
      <Newsletter />
      <EresEspecialista />
      <Footer />
      </>
    );
  }
  
  export default Home;