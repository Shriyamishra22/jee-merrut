import React, { useState } from "react";
import "../Pages/CSS/Course.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const Courses = () => {
  const [activeFilter, setActiveFilter] = useState("All Courses");
  const [search, setSearch] = useState("");

  const courses = [
    {
      id: 1,
      title: "CS / IT Engineering",
      category: "CS/IT",
      icon: "💻",
      image: "/images/c1.jpg",
      description: "Build strong programming and computer science concepts.",
      lessons: "45 Lessons",
      students: "2.5K+ Students",
      rating: "4.9",
      features: [
        "Programming Basics",
        "Data Structures",
        "Core CS Concepts"
      ]
    },

    {
      id: 2,
      title: "Mechanical Engineering",
      category: "Mechanical",
      icon: "⚙️",
      image: "/images/c3.jpg",
      description: "Master mechanical engineering concepts with structured learning.",
      lessons: "40 Lessons",
      students: "1.8K+ Students",
      rating: "4.8",
      features: [
        "Engineering Mechanics",
        "Thermodynamics",
        "Machine Design"
      ]
    },

    {
      id: 3,
      title: "Electrical Engineering",
      category: "Electrical",
      icon: "⚡",
      image: "/images/c2.jpg",
      description: "Learn electrical concepts with practical and exam-focused classes.",
      lessons: "42 Lessons",
      students: "2K+ Students",
      rating: "4.9",
      features: [
        "Circuit Theory",
        "Electrical Machines",
        "Power Systems"
      ]
    },

    {
      id: 4,
      title: "Chemical Engineering",
      category: "Chemical",
      icon: "🧪",
      image: "/images/c6.jpg",
      description: "Understand chemical engineering concepts from basics to advanced.",
      lessons: "38 Lessons",
      students: "1.5K+ Students",
      rating: "4.8",
      features: [
        "Process Calculations",
        "Chemical Thermodynamics",
        "Mass Transfer"
      ]
    },

    {
      id: 5,
      title: "Civil Engineering",
      category: "Civil",
      icon: "🏗️",
      image: "/images/c8.jpg",
      description: "Complete civil engineering preparation with expert guidance.",
      lessons: "44 Lessons",
      students: "1.9K+ Students",
      rating: "4.8",
      features: [
        "Building Materials",
        "Structural Engineering",
        "Surveying"
      ]
    },

    {
      id: 6,
      title: "Computer Science Foundation",
      category: "CS/IT",
      icon: "🖥️",
      image: "/images/c10.jpg",
      description: "Start your computer science journey with strong fundamentals.",
      lessons: "35 Lessons",
      students: "3K+ Students",
      rating: "4.9",
      features: [
        "Computer Fundamentals",
        "Programming",
        "Problem Solving"
      ]
    },

    {
      id: 7,
      title: "Electrical Foundation",
      category: "Electrical",
      icon: "🔌",
      image: "/images/c5.jpg",
      description: "Learn electrical engineering fundamentals step by step.",
      lessons: "32 Lessons",
      students: "1.4K+ Students",
      rating: "4.7",
      features: [
        "Basic Electrical",
        "Network Theory",
        "Measurements"
      ]
    },

    {
      id: 8,
      title: "Mechanical Foundation",
      category: "Mechanical",
      icon: "🔧",
      image: "/images/c4.jpg",
      description: "Build your mechanical engineering foundation from scratch.",
      lessons: "30 Lessons",
      students: "1.6K+ Students",
      rating: "4.8",
      features: [
        "Engineering Drawing",
        "Mechanics",
        "Material Science"
      ]
    }
  ];


  const filters = [
    "All Courses",
    "CS/IT",
    "Mechanical",
    "Electrical",
    "Chemical",
    "Civil"
  ];


  const filteredCourses = courses.filter((course) => {

    const matchesCategory =
      activeFilter === "All Courses" ||
      course.category === activeFilter;

    const matchesSearch =
      course.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });


  return (
    <>
      <Header />
      <div className="courses-page">
        <div className="courses-hero">

          <div className="courses-hero-content">

            <span className="hero-small-text">
              LEARN • PRACTICE • ACHIEVE
            </span>

            <h1>
              Explore Our Courses
            </h1>

            <p>
              Learn from experienced faculty with structured
              courses designed for your success.
            </p>

            <div className="course-search">

              <span>🔍</span>

              <input
                type="text"
                placeholder="Search for courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>
          </div>
        </div>
        <div className="courses-section">
          <div className="courses-heading">
            <div>
              <span>OUR COURSES</span>

              <h2>
                Find the Right Course for You
              </h2>

              <p>
                Choose from our carefully designed courses
                and start your learning journey.
              </p>
            </div>

          </div>


          {/* ================= FILTER ================= */}

          <div className="course-filters">

            {filters.map((filter) => (

              <button
                key={filter}
                className={
                  activeFilter === filter
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>

            ))}

          </div>
          <div className="courses-grid">

            {filteredCourses.length > 0 ? (

              filteredCourses.map((course) => (

                <div
                  className="course-card"
                  key={course.id}
                >

                  {/* Image */}

                  <div className="course-card-image">

                    <img
                      src={course.image}
                      alt={course.title}
                    />

                    <span className="course-icon">
                      {course.icon}
                    </span>

                  </div>

                  <div className="course-card-content">

                    <span className="course-category">
                      {course.category}
                    </span>

                    <h3>
                      {course.title}
                    </h3>

                    <p className="course-description">
                      {course.description}
                    </p>


                    {/* Features */}

                    <div className="course-features">

                      {course.features.map((feature, index) => (

                        <span key={index}>
                          ✓ {feature}
                        </span>

                      ))}

                    </div>


                    {/* Info */}

                    <div className="course-info">

                      <span>
                        ▶ {course.lessons}
                      </span>

                      <span>
                        ⭐ {course.rating}
                      </span>

                    </div>


                    <div className="course-bottom">

                      <span className="students">
                        👥 {course.students}
                      </span>

                      <Link
                        to={`/course/${course.id}`}
                        className="view-course-btn"
                      >
                        View Course →
                      </Link>

                    </div>

                  </div>

                </div>

              ))

            ) : (

              <div className="no-course">
                <h3>No Courses Found</h3>
                <p>
                  Try searching for another course.
                </p>
              </div>

            )}

          </div>

        </div>


        {/* ================= BOTTOM CTA ================= */}

        <section className="courses-cta">

          <div className="cta-content">

            <span>
              START YOUR JOURNEY TODAY
            </span>

            <h2>
              Still Confused Which Course to Choose?
            </h2>

            <p>
              Talk to our academic counsellor and get
              personalized guidance for your career.
            </p>

            <button>
              Talk to an Expert →
            </button>

          </div>

        </section>


      </div>
      <Footer />
    </>


  )
}

export default Courses;