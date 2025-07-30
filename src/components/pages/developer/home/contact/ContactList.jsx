import { Form, Formik } from "formik";
import React from "react";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../custom-hooks/queryData";
import { apiVersion } from "../../../../helpers/function-generals";

const ContactList = ({
  itemEdit,
  isLoading,
  isFetching,
  error,
  dataContact,
  handleAdd,
  handleEdit,
  handleDelete,
  handleToggleTable,
  isTable,
}) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/controllers/developer/contact/contact.php?id=${itemEdit.contact_aid}`
          : `${apiVersion}/controllers/developer/contact/contact.php`,
        itemEdit
          ? "put" // UPDATE
          : "post", //CREATE
        values
      ),
    onSuccess: (data) => {
      // //validate reading
      queryClient.invalidateQueries({ queryKey: ["contact"] }); // give id for refetching data.

      if (data.success) {
        alert("Succcessfully Created.");
      } else {
        alert(data.error);
      }
    },
  });

  const initVal = {
    contact_fullname: itemEdit ? itemEdit.contact_fullname : "",
    contact_email: itemEdit ? itemEdit.contact_email : "",
    contact_message: itemEdit ? itemEdit.contact_message : "",
    // contact_fullname: "",
    // contact_email: "",
    // contact_message: "",
  };

  return (
    <>
      <Formik
        initialValues={initVal}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log(values);
          mutation.mutate(values);
          resetForm();
        }}
      >
        <Form className="contact">
          <div>
            <div className="relative mt-3">
              <InputText
                label="Full Name"
                name="contact_fullname"
                type="text"
                disabled={mutation.isPending}
              />
              Full Name
            </div>
            <div className="relative mt-3 mb-5">
              <InputText
                label="Email Address"
                name="contact_email"
                type="text"
                disabled={mutation.isPending}
              />
              Email Address
            </div>
            <div className="relative mt-3 mb-5">
              <InputTextArea
                label="Message"
                name="contact_message"
                type="text"
                disabled={mutation.isPending}
              />
              Message
            </div>
          </div>
          <button
            type="text"
            disabled={mutation.isPending}
            className="btn btn--blue w-full"
          >
            Send Message
            {mutation.isPending}
          </button>
          {/* <div className="right-1 top-0 absolute">
          </div>
          <div className="relative">
            <label>Full Name</label>
            <input type="text" />
           
          </div>
          <div className="relative">
            <label>Email Address</label>
            <input type="text" />
          </div>
          <div className="relative">
            <label>Message</label>
            <textarea rows="4"></textarea>
          </div>
          <button className="btn btn--blue w-full">Send Message</button> */}
        </Form>
      </Formik>
    </>
  );
};

export default ContactList;
