import React from "react";
import { HiPencil } from "react-icons/hi";
import ModalAddTestimonials from "./ModalAddTestimonials";
import { apiVersion } from "../../../../helpers/function-generals";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { FaList, FaTable } from "react-icons/fa";
import TestimonialsTable from "./TestimonialsTable";
import TestimonialsList from "./TestimonialsList";
import ModalDeleteTestimonials from "./ModalDeleteTestimonials";

const Testimonials = () => {
  const [isModalTestimonials, setIsModalTestimonials] = React.useState(false);
  const [isDeleteTestimonials, setIsDeleteTestimonials] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isTable, setIsTable] = React.useState(false);

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
          <h2 className="text-3xl font-bold text-center mb-5">
            Client Testimonials
          </h2>
          <div className="flex justify-end pr-5">
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
              className="tooltip "
              data-tooltip="Add"
              type="button"
            >
              <HiPencil className="flex items-end size-6 bg-primary text-white rounded-full p-1 ease-in-out duration-200 border transition-all " />
            </button>
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
        />
      )}
    </>
  );
};

export default Testimonials;
