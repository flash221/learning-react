import React from "react";

import mailimg from "./img/Mail.png";
import linkedin from "./img/LinkedIn.png";

export default function CTA(){
    return (
        <div className="cta">
            <div className="cta--email">
                <img src={mailimg} className="cta--email--img" />
                <p> Email </p>
            </div>
            <div className="cta--linkedin">
                <img src={linkedin} className="cta--linkedin--img" />
                <p> LinkedIn </p>
            </div>
        </div>
    )
}