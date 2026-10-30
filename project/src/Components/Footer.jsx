import React from "react";
import "../Components/CSS/Footer.css"

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-about">
          <div className="footer-logo">
            <div className="logo-icon">
       <img src="/images/logo.png" alt=""/>
            </div>
            <h2>
              JEE <span>Classes</span> Merrut
            </h2>

          </div>


          <p className="footer-description">
            India's specialized edtech platform making
            top-tier preparation accessible and affordable
            for students.
          </p>


          {/* Social Icons */}

          <div className="footer-social">

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

            <a href="#">
              <FaTelegramPlane />
            </a>

            <a href="#">
              <FaRegCommentDots />
            </a>

          </div>

        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>

            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/courses">Courses</a>
            </li>

            <li>
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="/contact">Contact Us</a>
            </li>

          </ul>

        </div>

        <div className="footer-column">

          <h3>Popular Courses</h3>

          <ul>

            <li>
              <a href="#">Civil Engineering</a>
            </li>

            <li>
              <a href="#">CS/IT Engineering</a>
            </li>

            <li>
              <a href="#">Chemical Engineering</a>
            </li>

            <li>
              <a href="#">Mechanical Engineering</a>
            </li>

          </ul>

        </div>

        <div className="footer-column">

          <h3>Legal</h3>

          <ul>

            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Service</a>
            </li>

            <li>
              <a href="#">Refund Policy</a>
            </li>

          </ul>

        </div>
        <div className="footer-contact">

          <h3>Contact Info</h3>


          <div className="footer-contact-item">

            <MdEmail />

            <span>
              jeemerrut@gmail.com
            </span>

          </div>


          <div className="footer-contact-item">

            <MdPhone />

            <span>
              +91 8052625007
            </span>

          </div>


          <div className="footer-contact-item">

            <MdLocationOn />

            <span>
              Lucknow, India
            </span>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 JE Classes. All rights reserved.
        </p>

        <p>
          Developed by
          <span> Shriya Mishra</span>
        </p>

      </div>

      <a
        href="#"
        className="whatsapp-button"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
};

export default Footer;