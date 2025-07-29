import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const ContactTable = ({
  isLoading,
  isFetching,
  error,
  dataContact,
  handleAdd,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      <table>
        <thead>
          <th>#</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Message</th>
          <th>Action</th>
        </thead>
        <tbody>
          {dataContact?.data.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.contact_fullname}</td>
                <td>{item.contact_email}</td>
                <td>{item.contact_message}</td>
                <td>
                  {" "}
                  <div className="flex items-center justify-start mr-5">
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

export default ContactTable;
