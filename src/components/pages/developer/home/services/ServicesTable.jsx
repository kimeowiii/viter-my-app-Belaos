import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/NoData";
import ServerError from "../../../../partials/ServerError";
import { useInView } from "react-intersection-observer";
import Loadmore from "../../../../partials/Loadmore";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";

const ServicesTable = ({
  isFetching,
  error,
  handleAdd,
  handleEdit,
  handleDelete,
  result,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  status,
  setPage,
  page,
  ref,
}) => {
  let counter = 1;
  return (
    <>
      <div className="relative">
        {isFetching && status != "pending" && <FetchingSpinner />}
        <div className="min-h-80 max-h-80 overflow-auto">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {(status == "pending" || result?.pages[0]?.data.length === 0) && (
                <tr className="text-center">
                  <td className="p-10" colSpan="100%">
                    {status == "pending" ? <TableLoading /> : <NoData />}
                  </td>
                </tr>
              )}

              {error && (
                <tr className="text-center">
                  <td className="p-10" colSpan="100%">
                    <ServerError />
                  </td>
                </tr>
              )}

              {result?.pages.map((page, key) => (
                <React.Fragment key={key}>
                  {page.data.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>{counter++}</td>
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
                </React.Fragment>
              ))}

              {/* {dataServices?.data.map((item, index) => {
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
          })} */}
            </tbody>
          </table>
          <div className="place-self-center">
            <Loadmore
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              result={result?.pages[0]}
              setPage={setPage}
              page={page}
              refView={ref}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesTable;
