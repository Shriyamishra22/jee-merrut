import React from "react";
import "../Pages/CSS/About.css"
import Header from "../Components/Header";
import Footer from '../Components/Footer'
const AboutUs = () => {
  return (
    <>
    <Header/>
     <div className="about-page">
      <div className="about-hero">
        <img src="/images/about.png"/>
      </div>
      <div className="our-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>
            JEE Classes Meerut was founded with a simple mission —
            to provide high-quality education to every student and
            help them achieve their dreams.
          </p>
          <p>
            With experienced faculty, structured learning programs,
            regular tests and continuous support, we help students
            build strong concepts and prepare confidently for their
            examinations.
          </p>
        </div>
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">🎓</div>
            <div>
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👨‍🎓</div>
            <div>
              <h3>1000+</h3>
              <p>Happy Students</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div>
              <h3>95%</h3>
              <p>Success Rate</p>
            </div>
          </div>

        </div>

      </div>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <div className="mission-container">
          <div className="mission-card">
            <div className="mission-icon">🎓</div>
            <h3>Quality Education</h3>
            <p>
              Provide quality education with clear concepts,
              practical learning and expert guidance.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">💬</div>
            <h3>Support Every Student</h3>
            <p>
              Help every student with doubt support, regular
              feedback and personalized guidance.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">🚀</div>
            <h3>Build a Better Future</h3>
            <p>
              Prepare students not only for exams but also
              for a successful future.
            </p>
          </div>

        </div>

      </div>
      <div className="why-section">
        <div className="why-content">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✓ Experienced Faculty</li>
            <li>✓ Structured Courses</li>
            <li>✓ Regular Tests & Analysis</li>
            <li>✓ Personalized Learning</li>
            <li>✓ Doubt Support</li>
            <li>✓ Complete Study Material</li>
          </ul>
        </div>
        <div className="why-image">

          <img
            src="/images/about3.jpg"
            alt="Students studying"
          />

          <div className="image-text">
            <span>Learn</span>
            <strong>Together</strong>
            <span>Grow Together</span>
          </div>

        </div>

      </div>

    </div>
    <Footer/>
    
    
    </>


  )
}

export default AboutUs;
