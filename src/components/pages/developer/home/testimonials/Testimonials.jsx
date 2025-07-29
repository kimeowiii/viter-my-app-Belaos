import React from "react";
import ModalAddTestimonials from "./ModalAddTestimonials";
import { apiVersion } from "../../../../helpers/function-generals";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { FaList, FaPlus, FaTable, FaTrash } from "react-icons/fa";
import TestimonialsTable from "./TestimonialsTable";
import TestimonialsList from "./TestimonialsList";
import ModalDeleteTestimonials from "./ModalDeleteTestimonials";
import { FaPencil } from "react-icons/fa6";

const Testimonials = () => {
  const [isModalTestimonials, setIsModalTestimonials] = React.useState(false);
  const [isDeleteTestimonials, setIsDeleteTestimonials] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isTable, setIsTable] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

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
    setItemEdit(null);
    setIsModalTestimonials(true);
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalTestimonials(true);
  };

  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteTestimonials(true);
  };

  const handleToggleTable = () => {
    setIsTable(!isTable);
  };

  return (
    <>
      {/* testimonials */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative w-full">
            <div className="text-center mb-12">
              <h2>Client Testimonials</h2>
            </div>
            <div className="absolute right-0 top-5 lg:top-1/3">
              <div className="flex items-center gap-x-3">
                <button
                  onClick={handleToggleTable}
                  className="flex items-center gap-2 hover:underline hover:text-primary"
                  type="button"
                >
                  {isTable == true ? (
                    <>
                      <FaList className="size-3" />
                      List
                    </>
                  ) : (
                    <>
                      <FaTable className="size-3" />
                      Table
                    </>
                  )}
                </button>
                <button
                  onClick={handleAdd}
                  className="flex items-center gap-2 hover:underline hover:text-primary tooltip"
                  type="button"
                  data-tooltip="Add"
                >
                  <FaPlus className="size-3" />
                  Add
                </button>
              </div>
            </div>
          </div>
          {isTable == true ? (
            <>
              <TestimonialsTable
                isLoading={isLoading}
                isFetching={isFetching}
                error={error}
                dataTestimonials={dataTestimonials}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              ></TestimonialsTable>
            </>
          ) : (
            <TestimonialsList
              isLoading={isLoading}
              isFetching={isFetching}
              error={error}
              dataTestimonials={dataTestimonials}
              handleAdd={handleAdd}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
            ></TestimonialsList>
          )}
        </div>
      </section>

      {isModalTestimonials && (
        <ModalAddTestimonials
          setIsModal={setIsModalTestimonials}
          itemEdit={itemEdit}
        />
      )}

      {isDeleteTestimonials && (
        <ModalDeleteTestimonials
          setModalDelete={setIsDeleteTestimonials}
          mySqlEndpoint={`${apiVersion}/controllers/developer/testimonials/testimonials.php?id=${itemEdit.testimonials_aid}`}
          queryKey="testimonials"
          setCurrentSlide={setCurrentSlide}
          currentSlide={currentSlide}
        />
      )}
    </>
  );
};

export default Testimonials;
