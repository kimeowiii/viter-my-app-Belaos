import React from "react";
import About from "./about/About";
import Services from "./services/Services";
import AboutCompany from "./about-company/AboutCompany";
import Testimonials from "./testimonials/Testimonials";
import Contact from "./contact/Contact";

const Home = () => {
  return (
    <>
      <About />
      <Services />
      <AboutCompany />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
