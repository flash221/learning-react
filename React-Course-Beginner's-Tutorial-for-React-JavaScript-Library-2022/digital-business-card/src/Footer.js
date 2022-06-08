import React from "react";

import tw from "./img/Twitter Icon.png";
import fb from "./img/Facebook Icon.png";
import ig from "./img/Instagram Icon.png";
import git from "./img/GitHub Icon.png";

export default function Footer() {
    return (
        <div className="footer">
            <img src={tw} className="twitter" />
            <img src={fb} className="fb" />
            <img src={ig} className="ig" />
            <img src={git} className="git" />
        </div>

    )
}