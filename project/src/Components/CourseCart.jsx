import React from 'react'
import "../Components/CSS/CourseCart.css"
import { FaArrowRight } from "react-icons/fa";

const CourseCart = ({ id, title, btn, color, image }) => {

  return (

    <> 
      <div className="course-cart-outer">
        <div className="course-cart">
          <div className="card">
            <div className="img-card">
              <img src={image}  alt={title}/>
            </div>
            <div className="text-card">
              <h2>{title}</h2>
              <h3> &#8377; 799  </h3>
              <del> &#8377; 2500</del>
              <span className='discount-badge'>68% OFF</span>
            </div>
            <button className={color}>{btn}
              <span><FaArrowRight /></span>
              </button>
          </div>
        </div>
      </div>
    </>

  )
}

export default CourseCart
