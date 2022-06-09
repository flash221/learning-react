import React from "react";

export default function Contact (props){
    console.log(props.name) 
    return (
        <div className="contact-card">
            <div className="img"></div>
            <h3> {props.name} </h3>
            <p> {props.phone} </p>
            <p> {props.email} </p>
        </div>
    )
}