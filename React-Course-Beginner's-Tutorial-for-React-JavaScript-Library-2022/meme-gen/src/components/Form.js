import React from "react";

import "../index.css";

import memesData from "../memesData";

export default function Form() {
    
    // const [url, setUrl] = React.useState(memesData.data.memes[0].url)

    // function getURL() {
    //     const item = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)].url;
    //     setUrl(item)
    //     console.log(item);
    // }

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: memesData.data.memes[0].url
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getURL() {
        const imageUrl = allMemeImages.data.memes[Math.floor(Math.random() * allMemeImages.data.memes.length)].url;
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: imageUrl
            }
        })
        // console.log(item);
    }

    // const thingsArray = ["Thing 1", "Thing 2"]

    // const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

    // function addItem() {
    //     // thingsArray.push(`Things ${thingsArray.length + 1}`)
    //     // console.log(thingsArray)
    //     setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`])
    // }

    // const pArray = thingsArray.map(thing => <p key={thing}>{thing}</p>)

    // const [isImp, setIsImp] = React.useState("Yes")

    // function handleClick() {
    //     isImp === "Yes" ? setIsImp("No") : setIsImp("Yes")
    // }

    // const [isImp, setIsImp] = React.useState(true)

    // function changeMind() {
    //     setIsImp(prevState => !prevState)
    // }


    // const [counter, setCounter] = React.useState(0)

    // function minus() {
    //     setCounter(preCount => preCount - 1)
    // }

    // function plus() {
    //     setCounter(preCount => preCount + 1)
    // }

    return (
        <main>
            <fieldset className="form">
                <label className="txtField">
                    <input
                        type="text"
                        name="top"
                        placeholder="Top Text"
                        className="form--input"
                    />
                    <input
                        type="text"
                        name="bottom"
                        placeholder="Bottom Text"
                        className="form--input"
                    />
                </label>
                <label>
                    <button
                        type="submit"
                        onClick={getURL}
                    >
                        Get a new meme image  🖼
                    </button>
                </label>
            </fieldset>
            <div className="memeImage">
                <img src={meme.randomImage} alt="meme" />
            </div>
            
            {/* <div>
                <button onClick={addItem}>add items</button>
                {pArray}
            </div> */}

            {/* <div className="state">
                <h1 className="state--title">Is state important to know?</h1>
                <div className="state--value" onClick={changeMind}>
                    <h1>{isImp ? "Yes" : "No"}</h1>
                </div>
            </div> */}

            {/* <div className="counter">
                <button className="counter-minus" onClick={minus}>dislike</button>
                <div className="counter--count">
                    <h1>{counter}</h1>
                </div>
                <button className="counter--plus" onClick={plus}>like</button>
            </div> */}

        </main>
    )
}