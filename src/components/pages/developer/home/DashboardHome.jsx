import React from "react";
import DashboardUpperNav from "../../../partials/DashboardUpperNav";
import DashboardSideNav from "../../../partials/DashboardSideNav";
import Header from "../../../pages/developer/home/header/Header";
import Footer from "../../../pages/developer/home/footer/Footer";
import Banner from "../../../pages/developer/home/banner/Banner";
import Services from "../../../pages/developer/home/services/Services";
import About from "../../../pages/developer/home/about/About";
import Testimonials from "../../../pages/developer/home/testimonials/Testimonials";
import Contact from "../../../pages/developer/home/contact/Contact";

const DashboardHome = () => {
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(true);
  return (
    <>
      <DashboardUpperNav />
      <DashboardSideNav
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
      <section
        className={`ml-[224px] absolute top-16 w-[calc(100dvw-224px)] h-[calc(100dvh-64px)] overflow-y-scroll transition-all ease-in-out duration-300 ${
          isSideNavOpen ? "" : "!ml-0 !w-full"
        }`}
      >
        <div className="page-container">
          <div className="content-wrap">
            <div className="container max-w-full">
              <Header />
              <Banner />
              <Services />
              <About />
              <Testimonials />
              <Contact />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default DashboardHome;
