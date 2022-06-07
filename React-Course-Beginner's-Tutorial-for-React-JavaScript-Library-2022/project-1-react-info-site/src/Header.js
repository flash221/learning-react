import React from "react";

export default function Header(){
	return (
		<header>
			<nav className = "nav-bar">
				<img src = "logo512.png" className = "nav-img" />
				{/* use className instead of class */}
				<ul className = "nav-items">
					<li> Pricing </li>
					<li> About </li>
					<li> Contact </li>
				</ul>
			</nav>
		</header>
	)
}

// export default Header;