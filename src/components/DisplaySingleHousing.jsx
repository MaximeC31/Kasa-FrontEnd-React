import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HousingJSON from "../assets/data/housing.json";
import CollapseCard from "./CollapseCard";

function DisplaySingleHousing() {
	// find corresponding id
	let { logementId } = useParams();
	const filteredLogement = HousingJSON.find((maison) => maison.id === `${logementId}`);

	// Change carrousel pictures
	const [index, setIndex] = useState(0);

	const nextImage = () => {
		if (index === filteredLogement.pictures.length - 1) {
			setIndex(0);
		} else {
			setIndex(index + 1);
		}
	};

	const previousImage = () => {
		if (index === 0) {
			setIndex(filteredLogement.pictures.length - 1);
		} else {
			setIndex(index - 1);
		}
	};

	// Insert housing reviews
	const positiveReview = filteredLogement.rating;

	const insertReviews = () => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			if (i < positiveReview) {
				stars.push(<i key={i} className="fa-solid fa-star"></i>);
			} else {
				stars.push(<i key={i} className="fa-solid fa-star" style={{ color: "lightgrey" }}></i>);
			}
		}
		return stars;
	};

	return (
		<article id="presentation-logement">
			<div id="carrousel-pictures">
				<div>
					<i className="fa-solid fa-chevron-left" onClick={previousImage}></i>
					<i className="fa-solid fa-chevron-right" onClick={nextImage}></i>
				</div>
				<img src={filteredLogement.pictures[index]} alt={filteredLogement.description} />
			</div>
			<div id="informations-logement">
				<div>
					<div>
						<h2>{filteredLogement.title}</h2>
						<p>{filteredLogement.location}</p>
						<div>
							{filteredLogement.tags.map((tag, index) => (
								<button key={index}>{tag}</button>
							))}
						</div>
					</div>
					<div>
						<div>
							<p>{filteredLogement.host.name}</p>
							<div>
								<img src={filteredLogement.host.picture} alt={filteredLogement.host.name} />
							</div>
						</div>
						<div id="housing-reviews">{insertReviews()}</div>
					</div>
				</div>
				<div id="display-others-informations">
					<CollapseCard title="Description" body={filteredLogement.description} />
					<CollapseCard title="Équipements" body={filteredLogement.equipments} />
				</div>
			</div>
		</article>
	);
}

export default DisplaySingleHousing;