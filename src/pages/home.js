import React from "react";
import HousingCards from "../components/HousingCards";

import imgLittoral from "../assets/img/littoral.svg";

function Home({baseURL}) {

	return (
		<>
			<div className="first-banniere">
				<img src={imgLittoral} alt="littoral brumeux" />
				<h1>Chez vous, partout et ailleurs</h1>
			</div>
			<HousingCards baseURL = {baseURL}/>
		</>
	);
}

export default Home;