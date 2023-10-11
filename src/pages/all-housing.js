import React from "react";
import HousingCards from "../components/HousingCards";

import CoastIMG from "../assets/img/coast.svg";

function AllHousing({ baseURL }) {
	return (
		<>
			<div className="first-banner">
				<img src={CoastIMG} alt="littoral brumeux" />
				<h1>Chez vous, partout et ailleurs</h1>
			</div>
			<HousingCards baseURL={baseURL} />
		</>
	);
}

export default AllHousing;