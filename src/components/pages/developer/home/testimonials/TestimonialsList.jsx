import React from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import CardTestimonial from "../../../../partials/CardTestimonial";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

const TestimonialsList = ({
  isLoading,
  isFetching,
  error,
  dataTestimonials,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  return (
    <>
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
                  <CardTestimonial
                    item={item}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  ></CardTestimonial>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev == 0 ? dataTestimonials.count - 1 : prev - 1
            )
          }
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <HiOutlineChevronLeft />
        </button>
        <button
          onClick={() =>
            setCurrentSlide((prev) =>
              prev == dataTestimonials.count - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-0 top-1/2 -translate-y-1/2 -ml-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <HiOutlineChevronRight />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {dataTestimonials?.data.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(item, index)}
              className={`size-3 rounded-full ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsList;
