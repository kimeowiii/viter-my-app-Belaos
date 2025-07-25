import React from "react";
import { FaTimes } from "react-icons/fa";
import ModalWrapper from "../../../../partials/modal/ModalWrapper";
import { Form, Formik } from "formik";
import { InputText } from "../../../../helpers/FormInputs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../custom-hooks/queryData";
import * as Yup from "yup";
import { apiVersion } from "../../../../helpers/function-generals";

const ModalAddHeader = ({ setIsModal, itemEdit }) => {
  const [animate, setAnimate] = React.useState("translate-x-full");

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/controllers/developer/header/header.php?id=${itemEdit.header_aid}`
          : ` ${apiVersion}/controllers/developer/header/header.php`,
        itemEdit
          ? "PUT" // UPDATE
          : "post", //CREATE
        values
      ),
    onSuccess: (data) => {
      // //validate reading
      // queryClient.invalidateQueries(""); // give id for refetching data.
      queryClient.invalidateQueries({ queryKey: ["header"] });

      if (data.success) {
        alert("Succcessfully Created.");
      } else {
        alert(data.error);
      }
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return; // don't close while query is ongoing
    setAnimate("translate-x-full"); //animate close of modal
    setTimeout(() => {
      // delay of closing
      setIsModal(false); //close upon animation exit
    }, 200);
  };

  const initVal = {
    header_name: itemEdit ? itemEdit.header_name : "",
    header_link: itemEdit ? itemEdit.header_link : "",
  };

  const yupSchema = Yup.object({
    header_name: Yup.string().required("required"),
    header_link: Yup.string().required("required"),
  });

  //UPON USING THIS MODAL AND ALL ELEMENT TAG ARE RENDERED, RUN THIS CODE
  React.useEffect(() => {
    setAnimate("");
  }, []); //[] is dependencies, if you have a value inside re-run the code inside

  return (
    <>
      <ModalWrapper className={`${animate}`} handleClose={handleClose}>
        <div className="modal_header relative mb-4">
          <h3 className="text-sm">{itemEdit ? "Edit" : "Add"} Header</h3>
          <button
            className="absolute  top-0.5 right-0"
            type="button"
            onClick={handleClose}
          >
            <FaTimes className="size-4" />
          </button>
        </div>
        <div className="modal_body overflow-y-auto overflow-x-hidden max-h-[calc(100dvh-40px)]">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              console.log(values);
              mutation.mutate(values);
            }}
          >
            {(props) => {
              return (
                // Forms
                <Form>
                  <div className="modal-overflow">
                    <div className="relative mt-3">
                      <InputText
                        label="Name"
                        name="header_name"
                        type="text"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="relative mt-3 mb-5">
                      <InputText
                        label="Link"
                        name="header_link"
                        type="text"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="modal__action flex justify-end absolute bottom-0 w-full mt-6 mb-4 gap-2 left-0 px-6">
                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="btn-modal-submit"
                    >
                      {mutation.isPending
                        ? "Loading..."
                        : itemEdit
                        ? "Save"
                        : "Add"}
                    </button>
                    <button
                      type="reset"
                      disabled={mutation.isPending}
                      className="btn-modal-cancel"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddHeader;
