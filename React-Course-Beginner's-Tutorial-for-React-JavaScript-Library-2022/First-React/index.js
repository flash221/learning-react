// Imperative way to program

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program!"
// h1.className = "header"
// document.getElementById("root").append(h1)

// console.log(h1)
/*
output
<h1 class="header">
*/


// Declarative way to program

// JSX JavaScript XML
// instead of class use className

// const element = <h1 className="header">Hello, World!</h1>
// console.log(element)
/*
output
{
    "$$typeof": Symbol("react.element")
    _owner: null
    _self: null
    _source: null
    _store: Object { … }
    key: null
    props: Object { className: "header", children: "Hello, World!" }
    ref: null
    type: "h1"
}
*/

// const page = (
//     <div>
//         <h1>This is JSX!</h1>
//         <p>My first React tutorial.</p>
//     </div>
// )

// ReactDOM.render(
//     page, 
//     document.getElementById("root")
// )

const navbar = (
    <nav>
        <h1>Rahul Patel</h1>
        <ul>
            <li>Student</li>
            <li>Web Developer</li>
            <li>Designer</li>
        </ul>
    </nav>
);

// JSX is not understood by the browser.
// They just give out the object.
// To render we have to the ReactDOM render.

// This will not do the job.
// document.getElementById("root").append(navbar)

// This will.
ReactDOM.render(
    navbar,
    document.getElementById("root")
);