import React, { useState, useEffect, useCallback } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import NavBar from "../NavBar/NavBar";
import StyledContact from "./styled";
init("user_Ny4EEEtavZDETXCSg5yNi");
const Contact = () => {
  const frmContact = {
    email: "",
    emailTitle: "",
    name: "",
    message: "",
  };
  const [contact, setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);
  const [showError, setShowError] = useState({
    email: false,
  });

  const modifyError = useCallback((email) => {
    setShowError({ email: email });
  }, []);

  useEffect(() => {
    const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (re.test(String(contact.email).toLowerCase()) || contact.email === "") {
      modifyError(false);
    } else {
      modifyError("A valid email address is required");
    }
  }, [contact, modifyError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("default_service", "template_73kpygj", contact).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setContact(frmContact);
        setShowMessage(true);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
  };
  return (
    <>
      <NavBar />
      <StyledContact>
        <div className="container pt-2 text-center">
          {showMessage ? (
            <div className="alert alert-success col-md-5 mx-auto" role="alert">
              Email sent!
            </div>
          ) : (
            ``
          )}

          <form onSubmit={handleSubmit}>
            <div className="pt-3">
              <h3 className="font-weight-bold"> CONTACT ME </h3>
            </div>

            <div className="pt-4 col-md-5 mx-auto">
              <div className="form-group text-left">
                {" "}
                <b>Name</b> <br />
                <input
                  value={contact.name}
                  required
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="pt-4 col-md-5 mx-auto">
              <div className="form-group text-left">
                {" "}
                <b>Email</b>
                <input
                  required
                  type="text"
                  value={contact.email}
                  name="email"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your email"
                />
                <h6>{showError.email}</h6>
              </div>
            </div>

            <div className="pt-4 col-md-5 mx-auto">
              <div className="form-group text-left">
                {" "}
                <b>Title</b> <br />
                <input
                  value={contact.emailTitle}
                  required
                  type="text"
                  name="emailTitle"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Title"
                />
              </div>
            </div>
            <div className="pt-4 col-md-5 mx-auto">
              <div className="form-group text-left">
                {" "}
                <b>Description</b> <br />
                <textarea
                  required
                  name="message"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Description"
                  value={contact.message}
                ></textarea>
              </div>
            </div>
            <div className="pt-3 col-md-5 mx-auto text-left">
              {contact.name.length &&
              contact.email.length &&
              contact.emailTitle.length &&
              contact.message.length ? (
                <button className="btn btn-dark">Submit</button>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </StyledContact>
    </>
  );
};
export default Contact;
