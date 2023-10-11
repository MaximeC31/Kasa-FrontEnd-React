import React from "react";
import { Link } from "react-router-dom";

import FooterLogo from "../assets/img/footer-logo.svg";

function Footer() {
	return (
		<footer id="footer">
			<Link to="./">
				<img src={FooterLogo} alt="logo-kasa" />
			</Link>
			<p>© 2023 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;