import React from "react";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiPencil,
} from "react-icons/hi";
import CardTestimonial from "../../../../partials/CardTestimonial";
import ModalAddTestimonials from "./ModalAddTestimonials";
import { apiVersion } from "../../../../helpers/function-generals";
import useQueryData from "../../../../custom-hooks/useQueryData";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isModalTestimonials, setIsModalTestimonials] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: dataTestimonials,
  } = useQueryData(
    `${apiVersion}/controllers/developer/testimonials/testimonials.php`,
    "get",
    "testimonials"
  );


  const handleAdd = () => {
    setIsModalTestimonials(true);
  };
  return (
    <>
      {/* testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="flex justify-end pr-5">
          <button
            onClick={handleAdd}
            className="tooltip "
            data-tooltip="Add"
            type="button"
          >
            <HiPencil className="flex items-end size-6 bg-primary text-white rounded-full p-1 ease-in-out duration-200 border transition-all " />
          </button>
        </div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>

          {/* Testimonial Slider */}
          <div className="relative max-w-4xl mx-auto">
            {/* Slides */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%` }}
              >
                {dataTestimonials?.data.map((item, key) => {
                  return (
                    <React.Fragment key={key}>
                      <CardTestimonial item={item} />
                    </React.Fragment>
                  );
                })}

                {/* <CardTestimonial
                  img={"images/testimonials-1.webp"}
                  alt={"Sarah Johnson"}
                  testimony={
                    "The team delivered our project ahead of schedule with exceptional quality. Our online sales increased by 120% within three months!"
                  }
                  name={"Sarah Johnson"}
                  position={" Marketing Direcotr, TechCorp"}
                />
                <CardTestimonial
                  img={"/images/testimonials-2.webp"}
                  alt={"Michael Chen image"}
                  testimony={
                    "From design to deployment, their attention to detail was impressive. They became true partners in our digital transformation journey."
                  }
                  name={"Michael Chen"}
                  position={"CEO, StartupHub"}
                />
                <CardTestimonial
                  img={"/images/testimonials-3.webp"}
                  alt={"Emma Rodriguez"}
                  testimony={
                    "Their SEO strategy tripled our organic traffic in 6 months. We've seen a dramatic improvement in lead quality and conversion rates."
                  }
                  name={"Emma Rodriguez"}
                  position={"CMO, GrowthSolutions"}
                /> */}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev == 0 ? 2 : prev - 1))
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronLeft />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev == 2 ? 0 : prev + 1))
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            >
              <HiOutlineChevronRight />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`size-3 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {isModalTestimonials && (
        <ModalAddTestimonials setIsModal={setIsModalTestimonials} />
      )}

      {/* <section className="bg-gray-50 py-12">
        <div className="container">
          <h2 className="title text-center">Client Testimonials</h2>
          <div className="max-w-3xl mx-auto">
            <div className="testimonialsSlider">
              <div className="testimonialsItem">
                <img
                  src="../images/testimonials-1.webp"
                  alt="Sarah johnson image"
                />
                <p>
                  "The team delivered our project ahead of schedule with
                  exceptional quality. Our online sales increased by 120% within
                  three months!"
                </p>
                <h6>Sarah Johnson</h6>
                <small>Marketing Director, TechCorp</small>
              </div>
              <div className="testimonialsItem">
                <img
                  src="../images/testimonials-2.webp"
                  alt="michael chen image"
                />
                <p>
                  "From design to deployment, their attention to detail was
                  impressive. They became true partners in our digital
                  transformation journey."
                </p>
                <h6>Michael Chen</h6>
                <small>CEO, StartupHub</small>
              </div>
              <div className="testimonialsItem">
                <img
                  src="../images/testimonials-3.webp"
                  alt="ema rodriguez image"
                />
                <p>
                  "Their SEO strategy tripled our organic traffic in 6 months.
                  We've seen a damatic improvement in lead quality and
                  conversion rates."
                </p>
                <h6>Emma Rodriguez</h6>
                <small>CMO, GrowthSolutions</small>
              </div>
            </div>
            <div id="controls" className="relative">
              <a className="prev">
                <div className="absolute bottom-40 -left-5 transform -translate-y-1/2 z-30">
                  <button className="bg-white shadow-md size-10 rounded-full flex items-center justify-center text-2xl text-black/90 hover:text-black/80">
                    &lt;
                  </button>
                </div>
              </a>
              <a className="next">
                <div className="absolute bottom-40 -right-5 transform -translate-y-1/2 z-30">
                  <button className="bg-white shadow-md size-10 rounded-full flex items-center justify-center text-2xl text-black/90 hover:text-black/80">
                    &gt;
                  </button>
                </div>
              </a>
            </div>
            <div className="tns-nav"></div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Testimonials;
