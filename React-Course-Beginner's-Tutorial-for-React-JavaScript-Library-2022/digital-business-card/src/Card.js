import React from "react";
import ReactDOM from "react-dom";

import Bio from "./Bio";
import CTA from "./CTA";
import About from "./About";
import Footer from "./Footer";

function Card() {
    return (
        <div className="card">
            <Bio />
            <CTA />
            <About />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Card />, document.getElementById("root"))