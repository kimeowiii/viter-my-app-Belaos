import React from "react";
import CardServices from "../../../../partials/CardServices";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-generals";
import { FaList, FaPlus, FaTable, FaTrash } from "react-icons/fa";
import ModalAddServices from "./ModalAddServices";
import { FaPencil } from "react-icons/fa6";
import ModalDeleteServices from "./ModalDeleteServices";
import ServicesList from "./ServicesList";
import { useIsFetching } from "@tanstack/react-query";
import ServicesTable from "./ServicesTable";

const Services = () => {
  const [isModalServices, setIsModalServices] = React.useState(false);
  const [isDeleteServices, setIsDeleteServices] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();
  const [isTable, setIsTable] = React.useState(false);

  const {
    isLoading,
    isFetching,
    error,
    data: dataServices,
  } = useQueryData(
    `${apiVersion}/controllers/developer/web-services/web-services.php`,
    "get",
    "web-services"
  );

  const handleAdd = () => {
    setItemEdit(null);
    setIsModalServices(true);
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalServices(true);
  };

  const handleDelete = (item) => {
    setItemEdit(item);
    setIsDeleteServices(true);
  };

  const handleToggleTable = () => {
    setIsTable(!isTable);
  };

  return (
    <>
      {/* Services */}
      <section id="services" className="bg-gray-50 py-12 md:py-20">
        <div className="container">
          <div className="relative w-full">
            <div className="text-center mb-12">
              <h2 className="title">Our Web Services</h2>
              <p>
                Professional solutions tailored to boost your online presence.
              </p>
            </div>
            <div className="absolute right-0 top-1/3">
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
                  className="flex items-center gap-2 hover:underline hover:text-primary"
                  type="button"
                >
                  <FaPlus className="size-3" />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* 3-column Grid */}
          {isTable == true ? (
            <>
              <ServicesTable
                isLoading={isLoading}
                isFetching={isFetching}
                error={error}
                dataServices={dataServices}
                handleAdd={handleAdd}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              ></ServicesTable>
            </>
          ) : (
            <ServicesList
              isLoading={isLoading}
              isFetching={isFetching}
              error={error}
              dataServices={dataServices}
              handleAdd={handleAdd}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            ></ServicesList>
          )}
        </div>
      </section>

      {isModalServices && (
        <ModalAddServices setIsModal={setIsModalServices} itemEdit={itemEdit} />
      )}

      {isDeleteServices && (
        <ModalDeleteServices
          setModalDelete={setIsDeleteServices}
          mySqlEndpoint={`${apiVersion}/controllers/developer/web-services/web-services.php?id=${itemEdit.web_services_aid}`}
          queryKey="web-services"
        />
      )}
    </>
  );
};

export default Services;
