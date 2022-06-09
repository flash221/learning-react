import React from "react";

import katie from "../img/katie.png";
import star from "../img/star.png";

export default function Card() {
    return (
        <div className="card">
            <p className="status"> sold out </p>
            <img src={katie} alt="Katie Zaferes" className="card--image" />
            <div className="card--status">
                <img src={star} alt="star rating" />
                <span> 5.0 </span>
                <span className="gray"> (6) &#183;</span>
                <span className="gray"> USA </span>
            </div>
            <p className="topic">
                Life Lessons with Katie Zaferes
            </p>
            <p className="pricing">
                <span className="price-bold"> From $136 </span> / person
            </p>
        </div>

    )
}