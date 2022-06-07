// React is what defines the JSX
import React from "react";
import ReactDOM from "react-dom";

import './index.css';

import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
// storing the content in a variable
// const page = (
// 	<div>
// 		<nav>
// 		<img src = "logo512.png" width = "40px" />
// 		</nav>
// 		<section>
// 			<h1>
// 				Fun facts about React
// 			</h1>
// 			<ul>
// 				<li> Was first released in 2013 </li>
// 				<li> Was originally created by Jordan Walke </li>
// 				<li> Haw well over 100K stars in GitHub </li>
// 				<li> Is maintained by Facebook </li>
// 				<li> Powers thousands of enterprise apps, including mobile apps </li>
// 			</ul>
// 		</section>
// 	</div>
// );

// instead we will use the Component
// a feature offered by React.
// function Header(){
// 	return (
// 		<header>
// 			<nav className = "nav-bar">
// 				<img src = "logo512.png" className = "nav-img" />
// 				{/* use className instead of class */}
// 				<ul className = "nav-items">
// 					<li> Pricing </li>
// 					<li> About </li>
// 					<li> Contact </li>
// 				</ul>
// 			</nav>
// 		</header>
// 	)
// }

// function MainPage(){
// 	return (
// 		<section>
// 			<h1 className = "header">
// 				Fun facts about React
// 			</h1>
// 			<ol>
// 				<li> Was first released in 2013 </li>
// 				<li> Was originally created by Jordan Walke </li>
// 				<li> Haw well over 100K stars in GitHub </li>
// 				<li> Is maintained by Facebook </li>
// 				<li> Powers thousands of enterprise apps, including mobile apps </li>
// 			</ol>
// 		</section>
// 	)
// }

// function Footer(){
// 	return (
// 		<footer className="footer">
// 			<span className="footer-txt">
// 				<small>&#169; 2022 StarLight development. All rights reserved.</small>
// 			</span>
// 		</footer>
// 	)
// }

function Page(){
	return (
		<div>
			<Header />
			<MainPage />
			<Footer />
		</div>
	)
}

// render JSX through Components
// placed under < />
ReactDOM.render(
	<Page />,
	document.getElementById("root")
);


// Name of Components should be in Pascal case.
// use className instead of class