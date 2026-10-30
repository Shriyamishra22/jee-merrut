import React from "react";
import "../Pages/CSS/Contact.css";

import { MdOutlineAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="contact-page">
        <div className="contact-hero">
          <img
            src="/images/contactbg.png"
            alt="Contact Us"
          />
        </div>
        <div className="contact-form-content">
          <h4>Get in Touch</h4>
          <h2>Contact Us</h2>

          <p>
            Have questions? We're here to help you start your journey.
          </p>

        </div>
        <div className="contact-form-main">
          <div className="contact-form-left">
            <div className="contact-form-left-heading">

              <h2>Contact Information</h2>

              <p>
                Fill up the form and our team will get back to you
                within 24 hours.
              </p>


              {/* PHONE */}
              <div className="contact-form-icon">

                <div className="contact-icons">
                  <MdOutlineAddIcCall />
                </div>

                <div className="contact-text">

                  <span>Call Us</span>

                  <p>
                    +91 8052625007
                  </p>

                </div>

              </div>


              {/* SECOND PHONE */}
              <div className="contact-form-icon">

                <div className="contact-icons">
                  <MdOutlineAddIcCall />
                </div>

                <div className="contact-text">

                  <span>Call Us</span>

                  <p>
                    +91 8052625007
                  </p>

                </div>

              </div>


              {/* EMAIL */}
              <div className="contact-form-icon">

                <div className="contact-icons">
                  <MdEmail />
                </div>

                <div className="contact-text">

                  <span>Email Us</span>

                  <p>
                    support@jeclasses.com
                  </p>

                </div>

              </div>


              {/* MAP */}
              <div className="contact-map">

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113881.06648807168!2d81.06442555!3d26.87862425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1791187191326!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="JEE Classes Merrut Location"
                >
                </iframe>

              </div>

            </div>

          </div>
          <div className="contact-form-right">

            <form>
              <div className="form-row">
                <label>
                  First Name
                </label>

                <input
                  type="text"
                  placeholder="Enter First Name"
                />
                <label>
                  Last Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Last Name"
                />
                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter Your Email"
                />
                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter Your Number"
                />
                <label>
                  Message
                </label>

                <textarea
                  placeholder="How can we help you?"
                >
                </textarea>


                {/* BUTTON */}
                <button type="submit">
                  Send Message
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>
      <Footer />

    </>
  );
};

export default Contact;