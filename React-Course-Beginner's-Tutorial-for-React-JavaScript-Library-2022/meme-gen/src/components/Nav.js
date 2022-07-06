import React from "react";

import "../index.css";

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src="./img/troll-face.png" alt="logo icon" />
                <h2> Meme Generator </h2>
            </div>
            <div className="subtitle">
                React Course - Project 3
            </div>
        </nav>
    )
}