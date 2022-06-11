import React from "react";

import "../index.css";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--image">
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className="card--txt">
                <span className="location">
                    <img src="./img/pin.png" alt="pin location" />
                    <p className="loc">{props.location}</p>
                    <p className="googleMap"><a href={props.googleMapsUrl}> View on Google Maps </a></p>
                </span>
                <h1> {props.title} </h1>
                <h3> {props.startDate} - {props.endDate} </h3>
                <p> {props.description} </p>
            </div>
        </div>

    )
}