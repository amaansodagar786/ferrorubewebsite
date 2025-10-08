import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FiPhone, FiGlobe } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import "./Contact.scss";

const Contact = () => {


   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const initialValues = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    company: Yup.string().required("Company name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9()+\s-]*$/, "Invalid phone number")
      .nullable(),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log("Form submitted:", values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      alert("Message sent — (this is a demo). Check console for values.");
    }, 800);
  };

  // Function to scroll to map section
  const scrollToMap = () => {
    const mapSection = document.querySelector('.map-section');
    if (mapSection) {
      mapSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="page-contact">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="hero__overlay"></div>
        <img
          className="hero__img"
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.1&auto=format&fit=crop&w=2000&q=80"
          alt="Contact Hero"
        />
        <div className="hero__center">
          <h1>Get in Touch</h1>
          {/* <p>We'd love to hear from you — questions, quotes or partnerships.</p>  */}
        </div>
      </header>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact__container">
          {/* LEFT SIDE INFO */}
          <aside className="contact__info">
            <h2>Contact us</h2>
            <p className="lead">
              Whether you have questions about our services, need support, or
              want to share your feedback, our dedicated team is here to assist
              you every step of the way.
            </p>

            <ul className="info-list">
              <li onClick={() => window.open('tel:+919879611705', '_self')}>
                <span className="icon"><FiPhone /></span>
                <div className="text-content">
                  <strong>Phone</strong>
                  <div className="muted">+91 98796 11705</div>
                </div>
              </li>
              <li onClick={() => window.open('mailto:ferrotube@yahoo.in,ferrotubeindia@yahoo.in', '_self')}>
                <span className="icon"><HiOutlineMail /></span>
                <div className="text-content">
                  <strong>Email</strong>
                  <div className="muted">ferrotube@yahoo.in</div>
                  <div className="muted">ferrotubeindia@yahoo.in</div>
                </div>
              </li>
              <li onClick={() => window.open('https://ferrotubeindia.com', '_blank')}>
                <span className="icon"><FiGlobe /></span>
                <div className="text-content">
                  <strong>Website</strong>
                  <div className="muted">ferrotubeindia.com</div>
                </div>
              </li>
              <li onClick={() => window.open('https://maps.google.com/?q=C1/219,GIDC+Estate,Vaghodia,Vadodara,391760,Gujarat,India', '_blank')}>
                <span className="icon"><GoLocation /></span>
                <div className="text-content">
                  <strong>Location</strong>
                  <div className="muted">
                    C1/219, GIDC Estate, Vaghodia, Vadodara - 391760
                    <br />
                    Gujarat (India)
                  </div>
                </div>
              </li>
            </ul>

            <div className="note" >
              <strong>NOTE:</strong>
              <div className="muted">Communication in English only.</div>
            </div>
          </aside>

          {/* RIGHT SIDE FORM */}
          <div className="contact__form-wrap">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, handleReset }) => (
                <Form className="contact__form">
                  <label className="field-label">Full Name*</label>
                  <Field name="name" placeholder="John Doe" />
                  <ErrorMessage name="name" component="div" className="err" />

                  <label className="field-label">Company Name*</label>
                  <Field name="company" placeholder="Company Pvt. Ltd." />
                  <ErrorMessage name="company" component="div" className="err" />

                  <label className="field-label">Email Address*</label>
                  <Field name="email" placeholder="name@company.com" />
                  <ErrorMessage name="email" component="div" className="err" />

                  <label className="field-label">Mobile Number</label>
                  <Field name="phone" placeholder="+91 98796 11705" />
                  <ErrorMessage name="phone" component="div" className="err" />

                  <label className="field-label">Your Message*</label>
                  <Field
                    as="textarea"
                    name="message"
                    rows="3"
                    placeholder="Write your message here..."
                  />
                  <ErrorMessage name="message" component="div" className="err" />

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn btn--muted"
                      onClick={() => handleReset()}
                    >
                      RESET
                    </button>
                    <button
                      type="submit"
                      className="btn btn--primary"
                      disabled={isSubmitting}
                    >
                      SUBMIT
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.563490725323!2d73.3762040750691!3d22.29451917969071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fd9da2a1bd555%3A0x35d3756ebff62b0a!2sferro%20tube%20%26%20forge%20industries!5e0!3m2!1sen!2sin!4v1759923371281!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
