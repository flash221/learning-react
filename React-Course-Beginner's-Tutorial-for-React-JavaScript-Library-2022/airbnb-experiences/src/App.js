import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";

import Card from "./components/Card";
import cardData from "./data.js";

import Contact from"./components/Contact";

export default function App(){
    const cards = cardData.map(data => {
        return (
            <Card
                key={data.id}

                // spread syntax
                // {...data}

                data = {data}
                // title={data.title}
                // desc={data.description}
                // price={data.price}
                // img={data.coverImg}
                // rating={data.stats.rating}
                // reviewCount={data.stats.reviewCount}
                // country={data.location}
                // spots={data.openSpots}
            />
        )
    })
    return (
        <div className="app">
            <Nav />
            <Hero />
            <section className="card--list">
                {cards}
            </section>

            {/* <Contact
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
            /> */}
        </div>
    )
}