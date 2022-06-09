import React from "react";

import "../index.css";

import logo from "../img/airbnb-logo.png";

export default function Nav(){
    return (
        <nav className="navbar">
            <img src={logo} className="navbar--logo" alt="airbnb logo" />
        </nav>
    )
}