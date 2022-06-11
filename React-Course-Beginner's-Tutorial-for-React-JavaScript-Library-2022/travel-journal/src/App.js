import React from "react";

import Navbar from "./components/Nav";
import Card from "./components/Card";
import data from "./data.js";

export default function App() {

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className="app">
            <Navbar />
            <section className="card--list">
                {cards}
            </section>
        </div>
    )
}