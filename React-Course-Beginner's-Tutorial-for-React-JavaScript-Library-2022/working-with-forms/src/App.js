import React from "react"
import "./index.css"

export default function App() {
    
    // React STATE should drives what is to be displayed in 
    // the input field.
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })
    
    // console.log(name)
    
    // console.log(event.target.value)
    
    // console.log(formData)
    
    function handleChange(event) {

        // if (event.target.name === "firstName") {
        //     setFormData(prevState => {
        //         return {
        //             ...prevState,
        //             firstName: event.target.value
        //         }
        //     })
        // } else {
        //     setFormData(prevState => {
        //         return {
        //             ...prevState,
        //             lastName: event.target.value
        //         }
        //     })
        // }

        setFormData(prevState => {
            const {name, value, type, checked} = event.target
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })

        console.log(formData.favColor)

        // setName(prevState => prevStateevent.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your First Name"
                onChange={handleChange}
                value={formData.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
            />
            <label htmlFor="email">Email ID</label>
            <input
                id="email"
                name="email"
                type="text"
                placeholder="Email ID"
                onChange={handleChange}
                value={formData.email}
            />
            <fieldset>
                <input
                    name="isFriendly"
                    type="checkbox"
                    id="isFriendly"
                    checked={formData.isFriendly}
                    onChange={handleChange}
                />
                <label htmlFor="isFriendly">Are you friend?</label>
            </fieldset>
            <fieldset className="emp">
                <legend> Current employment status</legend>
                    <input
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <input
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <input
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
            </fieldset>
            <br/>
            <label htmlFor="favColor">What is your favourite color?</label>
            <br/>
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <label htmlFor="comments">Any comments?!</label>
            <textarea
                id="comments"
                value={formData.comments}
                name="comments"
                placeholder="Leave a comment!"
                onChange={handleChange}
            />
            
            <button>Submit!</button>
        </form>
    )
}
