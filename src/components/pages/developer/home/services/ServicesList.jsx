import React from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import CardServices from "../../../../partials/CardServices";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/NoData";
import ServerError from "../../../../partials/ServerError";
import Loadmore from "../../../../partials/Loadmore";

const ServicesList = ({
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
  refVal,
}) => {
  return (
    <>
      <div className="relative">
        {isFetching && status != "pending" && <FetchingSpinner />}
        <div className="min-h-[25.5rem] min-w-full  overflow-x-auto flex flex-row items-center gap-10">
          {(status == "pending" || result?.pages[0]?.data.length == 0) && (
            <div className="text-center w-full">
              {status == "pending" ? <TableLoading /> : <NoData />}
            </div>
          )}
          {error && (
            <div className="text-center w-full">
              <ServerError />
            </div>
          )}

          {result?.pages.map((page, key) => (
            <React.Fragment key={key}>
              {page.data.map((item, key) => {
                return (
                  <div key={key} className="relative">
                    <div className="bg-gray-200 min-h-80 min-w-96 rounded-md relative">
                      <div className="p-5 flex-col items-center gap-3">
                        {/* image container */}
                        <div className="min-w-20 min-h-20 flex items-center justify-center mb-3">
                          <img
                            src={item.web_services_image}
                            alt={item.web_services_image}
                          />
                        </div>
                        <div className="text-center flex flex-col gap-3">
                          <h4>{item.web_services_name}</h4>
                          <p>{item.web_services_description}</p>
                        </div>
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="absolute -top-4 -right-3 z-10 ">
                      <div className="flex items-center justify-end gap-x-3 mr-5">
                        <button
                          onClick={() => handleEdit(item)}
                          type="button"
                          data-tooltip="Edit"
                          className="tooltip"
                        >
                          <FaPencilAlt className="size-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item)}
                          type="button"
                          data-tooltip="Delete"
                          className=" tooltip"
                        >
                          <FaTrash className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
          <div>
            <Loadmore  
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}   
            result={result?.pages[0]}
            setPage={setPage}
            page={page}
            refView={refVal}
            />
          </div>

          {/* <div className="bg-gray-200 min-h-80 min-w-96 rounded-md"></div>
          <div className="bg-gray-200 min-h-80 min-w-96 rounded-md"></div>
          <div className="bg-gray-200 min-h-80 min-w-96 rounded-md"></div>
          <div className="bg-gray-200 min-h-80 min-w-96 rounded-md"></div>
          <div className="bg-gray-200 min-h-80 min-w-96 rounded-md"></div>
          <div className="bg-gray-200 min-h-80 min-w-96 rounded-md"></div> */}
        </div>
      </div>

      {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
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
          </div> */}
    </>
  );
};

export default ServicesList;
