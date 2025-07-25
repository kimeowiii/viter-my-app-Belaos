import React, { useState } from "react";
import { apiVersion } from "../../../../helpers/function-generals";
import useQueryData from "../../../../custom-hooks/useQueryData";
import ModalAddHeader from "./ModalAddHeader";
import { HiPencil } from "react-icons/hi";
import { FaPencil } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isModalHeader, setIsModalHeader] = React.useState(false);
  const [itemEdit, setItemEdit] = React.useState();

  const {
    isLoading,
    isFetching,
    error,
    data: dataHeader,
  } = useQueryData(
    `${apiVersion}/controllers/developer/header/header.php`,
    "get",
    "header"
  );

  const handleAdd = () => {
    setItemEdit(null);
    setIsModalHeader(true);
  };

  const handleEdit = (item) => {
    setItemEdit(item);
    setIsModalHeader(true);
  };

  return (
    <>
      {/* Header */}
      <header id="header" className="bg-white relative shadow-md w-full">
        <div className="container mx-auto px-4 py-7 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <span className="ml-2 text-xl font-bold">MyApp</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {dataHeader?.data.map((item, key) => {
              return (
                <div key={key} className="relative">
                  <a
                    href={item.header_link}
                    onClick={() => handleEdit(item)}
                    className="hover:text-blue-500"
                  >
                    {item.header_name}
                  </a>
                </div>
              );
            })}

            {/* <a href="#" className="hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
            <a href="#services" className="hover:text-blue-500">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-500">
              Contact
              <button
                onClick={() => handleEdit()}
                type="button"
                data-tooltip="Edit"
                className="tooltip text-white"
              >
                 <FaPencil className="p-1 bg-primary rounded-full" />
              </button>
            </a> */}
            <button
              onClick={handleAdd}
              className="tooltip"
              data-tooltip="Add"
              type="button"
            >
              <HiPencil className="size-6 bg-primary text-white rounded-full p-1 ease-in-out duration-200 border transition-all " />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu (now positioned absolutely) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg px-4 py-2 space-y-2 border-t border-gray-200">
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#"
              className="block py-2 hover:text-blue-500"
            >
              Home
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#about"
              className="block py-2 hover:text-blue-500"
            >
              About
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#services"
              className="block py-2 hover:text-blue-500"
            >
              Services
            </a>
            <a
              onClick={() => setIsMenuOpen(false)}
              href="#contact"
              className="block py-2 hover:text-blue-500"
            >
              Contact
            </a>
            <button
              onClick={handleAdd}
              className="tooltip"
              data-tooltip="Add"
              type="button"
            >
              <HiPencil className="size-6 bg-primary text-white rounded-full p-1 ease-in-out duration-200 border transition-all " />
            </button>
          </div>
        )}
      </header>

      {isModalHeader && (
        <ModalAddHeader setIsModal={setIsModalHeader} itemEdit={itemEdit} />
      )}
    </>
  );
};

export default Header;
