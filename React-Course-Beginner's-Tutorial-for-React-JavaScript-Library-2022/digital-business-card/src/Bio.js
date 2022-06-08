import React from "react"

import bioimg from "./img/bio-image.png";

export default function Bio() {
    return (
        <div className="bio">

            <img src={bioimg} className="bio--img" />
            <h1 className="bio--name"> Dipper Pines </h1>
            <h4 className="bio--role"> Mystery Shack </h4>
            <h6 className="bio--site"> mason.gravityfalls.in </h6>

        </div>
    )
}