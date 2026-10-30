import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import "../Pages/CSS/Home.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CourseCart from '../Components/CourseCart';
import { FaArrowRightLong } from "react-icons/fa6";
import { PiMedalDuotone } from "react-icons/pi";
import { FaUserShield } from "react-icons/fa";
import { FcVideoFile } from "react-icons/fc";
import { FcRating } from "react-icons/fc";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";





const Home = () => {
  let course = [
    { id: 1, title: "Civil Engineering", btn: "View Course", color: "red", image: "/images/bb1.png" },
    { id: 2, title: "CS/IT Engineering", btn: "View Course", color: "blue", image: "/images/bb2.png" },
    { id: 3, title: "Electronic Enginerring", btn: "View Course", color: "dark", image: "/images/bb3.png" },
    { id: 4, title: "Chemical Enginerring", btn: "View Course", color: "purple", image: "/images/b4.webp" },
  ]

  let free = [
    { id: 1, title: "JEE Mathematics Foundation", image: "/images/c1.jpg" },
    { id: 2, title: "Physics Basics for JEE", image: "/images/c2.jpg" },
    { id: 3, title: "Chemistry Foundation", image: "/images/c3.jpg" },
  ]
  return (
    <>
      <Header />
      {/* hero-section */}
      <div className="hero-section">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          className='hero-swiper'

        >
          <SwiperSlide>
            <img src='/images/slider1.jpg' alt='slide1' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/slider3.jpg' alt='slide1' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/slider2.jpg' alt='slide1' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/images/slider4.jpg' alt='slide1' />
          </SwiperSlide>




        </Swiper>
      </div>

      {/* main-section */}
      <div className="main-section-outer">
        <div className="main-section-left">
          <h4>SMART LEARNING</h4>
          <h1>Crack Your Exam,<br /> Build Your Future</h1>
          <p>Learn from experienced faculty with structured courses, quality study material and exam-focused preparation</p>
          <div className="btn">
            <button>Explore Courses</button>
            <button>Viwe Batches</button>
          </div>
          <div className="main-content">
            <p> ✓ Expert Faculty <span> ✓ Live Classes </span></p>
            <p> ✓ Expert Faculty   <span>✓ Live Classes</span></p>
            <p> ✓ Study Material <span >✓ Test Series</span></p>
          </div>
        </div>
        <div className="main-section-right">
          <img src='/images/hero-bg.jpg' alt='image1' />
        </div>
      </div>
      {/* Course-cart */}
      <div className="course-cart-main-outer">
        <h1>Trending <span>Batches</span></h1>
        <p>Learn from experienced faculty with structured courses<br /> designed to build strong concepts,</p>

        <div className='main-outer'>
          {
            course.slice(0, 5).map((item) => (
              <CourseCart 
              key={item._id} 
              id={item._id}
              title={item.title} 
              btn={item.btn} 
              color={item.color} 
              image={item.image} />
            ))
          }

        </div>


      </div>
      {/* Free Courses */}
      <div className="free-courses-main">
        <div className="free-course-outer">
          <h1>Free Course</h1>
          <div className="free-course-content">
            <p>Start your preparation at zero cost</p>
            <a href='#'>View All free Content <span><FaArrowRightLong /></span></a>
          </div>
          <div className="free-course-cart">

            {
              free.map((item) => (

                <div className="free-cart" key={item.id}>
                  <div className="free-course-img">
                    <img src={item.image} alt='' />
                  </div>
                  <div className="free-course-cart-content">
                    <h3>{item.title}</h3>

                    <span>12 Lessons</span>
                    <span> 4.8 Rating</span>
                    <span> 2K+ Students</span>
                    <button>Start Watching</button>
                  </div>

                </div>
              ))
            }
          </div>

        </div>
      </div>

      <div className="our-achivements-main">
        <div className="our-achivement-outer">

          <div className="our-achivements-content">
            <div className="achivements-heading">
              <h2>Our Achivements</h2>
              <span className='heading-line'></span>
              <p> Numbers that speak for our dedication and quality</p>
            </div>

            <div className="achivements-cards">
              <div className="achivement-card">
                <div className="achivement-icon">
                  <PiMedalDuotone />
                </div>
                <h3>10,000+</h3>
                <p>Selections in JNV/Sainik</p>
              </div>
              <div className="achivement-card">
                <div className="achivement-icon">
                  <FcVideoFile />
                </div>
                <h3>500K+</h3>
                <p>VIDEO LECTURE</p>
              </div>
              <div className="achivement-card">
                <div className="achivement-icon">
                  <FaUserShield />

                </div>
                <h3>100K+</h3>
                <p>Happy Students</p>
              </div>
              <div className="achivement-card">
                <div className="achivement-icon">
                  <FcRating />
                </div>
                <h3>4.6/5</h3>
                <p>Average Rating</p>
              </div>
            </div>

          </div>


        </div>

      </div>
      <div className="downloading-channel-main">
        <div className="download-left-section">
          <div className="downlaod-app-image">
            <img src='/images/app3.png' alt='Mobile app' />
          </div>
          <div className="download-app-content">
            <h2>Download Our App</h2>
            <p>Get more study provides in jee merrut</p>
            <div className="app-store-buttons">
              <button className='google'>Google Play</button>
              <button className='App'>App Store</button>
            </div>
          </div>
        </div>
        <div className="yputube-channel-main">
          <div className="youtube-right-section">
            <div className='youtube-app-image'>
              <img src='/images/yy2.png' />
            </div>
            <div className="youtube-app-content">
              <h2>Vist My Youtube Channel</h2>
              <p>Free lectures,motivations,doubt,solving & more content for your success</p>
            </div>
            <div className="subscribe-btn">
              <button>Subscribe Now  <span><FaArrowRight /></span></button>
            </div>
          </div>
        </div>


      </div>
      <div className="contact-form-outer">
        <div className="contact-form-main">
          <div className="contact-form-content">
            <h4>Get in Touch</h4>
            <h2>Contact Us</h2>
            <p>Have questions? We're here to help you start your journey.</p>
          </div>
          <div className="contact-form-left">
            <div className="contact-form-left-heading">
              <h2>Contact Information</h2>
              <p>Fill up the form and our team will get back to you within 24 hours.</p>
              <div className="contact-form-icon">
                <div className="contact-icons">
                  <MdOutlineAddIcCall />
                </div>
                <div className="contact-text">
                  <span>Call Us</span>
                  <p>+91 8052625007</p>
                </div>
              </div>
              <div className="contact-form-icon">
                <div className="contact-icons">
                  <MdOutlineAddIcCall />
                </div>
                <div className="contact-text">
                  <span>Call Us</span>
                  <p>+91 8052625007</p>
                </div>
              </div>
              <div className="contact-form-icon">
                <div className="contact-icons">
                  <MdOutlineAddIcCall />
                </div>
                <div className="contact-text">
                  <span>Email Us</span>
                  <p>support@je.classes</p>
                </div>
              </div>
              {/* <div className="contact-map">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113881.06648807168!2d81.06442555!3d26.87862425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1791187191326!5m2!1sen!2sin"  loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> 
                </div> */}
            </div>
          </div>
          <div className="contact-form-right">
            <form>
              <div className="form-row">
                <label>First Name</label>
                <input type='text' placeholder='Enter First Name' />
                <label>Last Name</label>
                <input type='text' placeholder='Enter Last Name' />
                <label>Email Address</label>
                <input type='email' placeholder='Enter Your Email' />
                <label>Phone Number:</label>
                <input type='number' placeholder='Enter Your Number' />
                <label>Message</label>
                <textarea placeholder='how can help You?'></textarea>

                <button>Send Message</button>
              </div>

            </form>
          </div>
        </div>

      </div>





      <Footer />

    </>
  )
}

export default Home
