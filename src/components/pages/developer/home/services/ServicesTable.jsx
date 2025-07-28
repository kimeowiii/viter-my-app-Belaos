import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const ServicesTable = ({
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
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Action</th>
        </thead>
        <tbody>
          {dataServices?.data.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.web_services_name}</td>
                <td>{item.web_services_description}</td>
                <td>
                  <div className="flex items-center justify-end mr-5">
                    <button
                      onClick={() => handleEdit(item)}
                      type="button"
                      data-tooltip="Edit"
                      className=" tooltip"
                    >
                      <FaPencil className="size-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      type="button"
                      data-tooltip="Delete"
                      className="tooltip"
                    >
                      <FaTrash className="size-4" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ServicesTable;
