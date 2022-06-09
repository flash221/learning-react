import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Contact from"./components/Contact";

export default function App(){
    return (
        <div className="app">
            {/* <Nav /> */}
            {/* <Hero /> */}
            {/* <Card /> */}
            <Contact
                name="dipper"
                phone="898-231-3231"
                email="asdf@sdf.com"
            />
            <Contact
                name="mabel"
                phone="128-232-0983"
                email="sdv@sdf.com"    
            />
            <Contact
                name="shanks"
                phone="345-645-23rq"
                email="sfbds@sdf.com"
            />
            <Contact
                name="buggy"
                phone="345-245-4567"
                email="cvb@sdf.com"
            />
        </div>
    )
}