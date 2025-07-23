import React from "react";
import CardServices from "../../../../partials/CardServices";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/function-generals";
import { FaPlus } from "react-icons/fa";
import ModalAddServices from "./ModalAddServices";

const Services = () => {
  const [isModalServices, setIsModalServices] = React.useState(false);
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
    setIsModalServices(true);
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

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {dataServices?.data.map((item, key) => {
              return (
                <React.Fragment key={key}>
                  <CardServices item={item} />
                </React.Fragment>
              );
            })}

            {/* <CardServices
              img={"/images/card-icon-web-development.webp"}
              alt={"Web development image"}
              title={"Web Development"}
              description={
                "Custom websites built with modern frameworks like Next.js and React for optimal performance."
              }
              link={"View Packages"}
            />

            <CardServices
              img={"/images/card-icon-ui-ux-design.webp"}
              alt={"UI/UX Design image"}
              title={"UI/UX Design"}
              description={
                "Beautiful interfaces designed to convert visitors with strategic user experience flows."
              }
              link={"See Portfolio"}
            />

            <CardServices
              img={"/images/card-icon-seo-optimization.webp"}
              alt={"SEO Optimization image"}
              title={"SEO Optimization"}
              description={
                "Increase your visibility on search engines with our data-driven SEO strategies."
              }
              link={"Get Audit"}
            /> */}
          </div>
        </div>
      </section>

      {isModalServices && <ModalAddServices setIsModal={setIsModalServices} />}
    </>
  );
};

export default Services;
