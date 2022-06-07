import React from "react"
import ReactDOM from "react-dom"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="logo512.png" className="logo-img" />
                <h3 className="logo-txt"> ReactFacts </h3>
            </div>
            <h4 className="nav-content"> React Course - Project 1</h4>
        </nav>
        // <h1> Navbar goes here! </h1>
    )
}

// ReactDOM.render(<Navbar />, document.getElementById("root"))