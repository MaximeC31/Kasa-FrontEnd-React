import React from "react";
import {Link} from "react-router-dom";

import HeaderLogo from "../assets/img/logo-header.svg";

function Header() {
	return (
		<header id="header">
			<Link to="./">
				<img src={HeaderLogo} alt="logo-kasa" />
			</Link>
			<nav>
				<ul>
					<li>
						<Link to="./">Accueil</Link>
					</li>
					<li>
						<Link to="./a-propos">À propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;