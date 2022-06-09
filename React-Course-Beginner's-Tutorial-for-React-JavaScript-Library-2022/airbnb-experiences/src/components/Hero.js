import React from "react";

import "../index.css";

import phgrid from "../img/photo-grid.png";

export default function Hero() {
    return (
        <section className="hero">
            <img src={phgrid} className="hero--img" alt="exp grid" />
            <div className="hero--txt">
                <h1 className="hero--txt--title"> Online Expereinces </h1>
                <p className="hero--txt--para"> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
            </div>
        </section>
    )
}