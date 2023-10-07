import React from "react";
import {Link} from "react-router-dom";

import HousingJSON from "../assets/data/logements.json";

function HousingCards({baseURL}) {
	return (
		<section className="housing-cards">
			{HousingJSON.map((house, index) => (
				<Link to={`${baseURL}${house.id}`} key={index}>
					<img src={house.cover} alt={house.title} />
					<h2>{house.title}</h2>
				</Link>
			))}
		</section>
	);
}

export default HousingCards;