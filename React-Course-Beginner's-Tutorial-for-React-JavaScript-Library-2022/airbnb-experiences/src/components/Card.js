import React from "react";

export default function Card(props) {

    // const colors = ["Red", "Orange", "Yellow", "Green", "Blue"]

    // const element = colors.map(col => {return `<h3>${col}</h3>`})
    
    let badgeText;
    if (props.data.openSpots === 0) {
        badgeText = "sold out";
    } else if(props.data.location === "Online") {
        badgeText = "online";
    } else {
        badgeText = "";
    }

    return (
        <div className="card">
            {/* {element} */}
            {badgeText && <div className="status"><p> {badgeText} </p></div>}
            {/* <div className="status"><p> {badgeText} </p></div> */}
            <img src={`img/${props.data.coverImg}`} alt={props.data.description} className="card--image" />
            <div className="card--status">
                <img src="./img/star.png" alt="star rating" />
                <span> {props.data.stats.rating} </span>
                <span className="gray"> ({props.data.stats.reviewCount}) &#183;</span> <span className="gray"> {props.country} </span>
            </div>
            <p className="topic">
                {props.data.title}
            </p>
            <p className="pricing">
                <span className="price-bold"> From ${props.data.price} </span> / person
            </p>
        </div>

    )
}