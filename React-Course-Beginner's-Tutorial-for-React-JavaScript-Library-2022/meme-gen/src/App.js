import React from "react";

import "./index.css";

import Navbar from "./components/Nav";
import Form from "./components/Form";

export default function App(){
    return (
        <div className="app">
            <Navbar />
            <Form />
        </div>
    )
}