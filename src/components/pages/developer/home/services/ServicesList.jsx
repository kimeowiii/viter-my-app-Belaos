import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import CardServices from "../../../../partials/CardServices";

const ServicesList = ({
  isLoading,
  isFetching,
  error,
  dataServices,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  return (
  <>
     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {dataServices?.data.map((item, key) => {
              return (
                <div key={key} className="relative">
                  <div className="absolute -top-5 right-3 ">
                    <button
                      onClick={() => handleEdit(item)}
                      type="button"
                      data-tooltip="Edit"
                      className="text-white tooltip"
                    >
                      <FaPencil className="p-1 bg-primary rounded-full" />
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      type="button"
                      data-tooltip="Delete"
                      className="text-red-600 tooltip"
                    >
                      <FaTrash className="p-1 bg-primary rounded-full" />
                    </button>
                  </div>
                  <CardServices item={item} />
                </div>
              );
            })}
          </div>
  </>
  );
};

export default ServicesList;
