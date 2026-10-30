import React from 'react'
import "../Components/CSS/CourseDetails.css"
const CourseDetails = () => {
  return (
    <>

<div className="course-details-page">
  <div className="course-banner">
    <div className="banner-content">
      <a href="/courses">← Back to Courses</a>
      <h1>Civil Engineering</h1>
      <p>
        Build strong civil engineering concepts with
        expert guidance, recorded classes and study material.
      </p>

      <div className="course-features">
        <span>▶ Live + Recorded Classes</span>
        <span>▣ Study Material</span>
        <span>♧ Doubt Support</span>
        <span>♧ Certificate of Completion</span>
      </div>
    </div>

    <div className="banner-image">
      <img
        src="/images/b1.webp"
        alt="Civil Engineering Course"
      />
    </div>
  </div>
  <div className="course-details-layout">
    <main className="course-main-content">
      <nav className="course-tabs">
        <button>Overview</button>
        <button>Course Content</button>
        <button>FAQs</button>
        <button>Reviews</button>
      </nav>
      <div className="course-about-section">
        <div className="about-description">
          <h2>About This Course</h2>
          <p>
            Our Civil Engineering course helps you build
            strong concepts with expert guidance.
          </p>

          <ul>
            <li>Complete Course Coverage</li>
            <li>Live & Recorded Classes</li>
            <li>Expert Faculty Support</li>
            <li>Practice Tests & Assignments</li>
            <li>Lifetime Access to Study Material</li>
          </ul>

          <button>Read More</button>
        </div>
        <div className="course-information">
          <div className="information-item">
            <span>◷</span>
            <div>
              <h3>Course Validity</h3>
              <p>7 Months</p>
            </div>
          </div>

          <div className="information-item">
            <span>▶</span>
            <div>
              <h3>Total Lectures</h3>
              <p>120+ Video Lectures</p>
            </div>
          </div>

          <div className="information-item">
            <span>▤</span>
            <div>
              <h3>Study Material</h3>
              <p>60+ Files</p>
            </div>
          </div>
        </div>
      </div>
      <div className="learning-section">
        <h2>What Will You Learn?</h2>

        <div className="learning-grid">
          <div className="learning-card">
            <span>‹ ›</span>
            <h3>Engineering Fundamentals</h3>
            <p>Learn core concepts from the basics.</p>
          </div>

          <div className="learning-card">
            <span>▤</span>
            <h3>Subject-wise Study</h3>
            <p>Complete coverage of important topics.</p>
          </div>

          <div className="learning-card">
            <span>⚙</span>
            <h3>Exam-Oriented Approach</h3>
            <p>Focused preparation for your exams.</p>
          </div>
        </div>
      </div>
      <div className="course-coupon">
        <span>🎟</span>
        <div>
          <h3>Have a Coupon Code?</h3>
          <p>Click below to find available coupons.</p>
        </div>
        <button>Apply Here →</button>
      </div>

    </main>
    <div className="course-purchase-card">
      <img
        src="/images/b1.webp"
        alt="Civil Engineering"
      />

      <div className="purchase-content">
        <h2>Civil Engineering</h2>
        <p>JEE Classes Meerut</p>

        <div className="course-rating">
          ⭐ 4.9 (2.5k Students)
        </div>

        <div className="course-price">
          <strong>₹799</strong>
          <del>₹2,500</del>
          <span>68% OFF</span>
        </div>

        <button>Get This Course →</button>

        <h3>What's Included?</h3>
        <ul>
          <li>120+ Video Lectures</li>
          <li>60+ PDF Files</li>
          <li>7 Months Validity</li>
          <li>Doubt Support</li>
          <li>Certificate of Completion</li>
        </ul>

        <div className="purchase-benefits">
          <span>Secure Payment</span>
          <span>Instant Access</span>
          <span>24/7 Support</span>
        </div>
      </div>
    </div>

  </div>
</div>



    </>
  )
}

export default CourseDetails
