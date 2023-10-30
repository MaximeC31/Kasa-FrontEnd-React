import React, { useEffect } from "react";
import DisplaySingleHousing from "../components/DisplaySingleHousing";
import { useParams, useNavigate } from "react-router-dom";
import HousingJSON from "../assets/data/housing.json";

function SingleRental() {
	const navigate = useNavigate();
	const { logementId } = useParams();

	const filteredHousing = HousingJSON.find((maison) => maison.id === logementId);

	useEffect(() => {
		if (!filteredHousing) {
			navigate("/404-not-found");
		}
	}, [filteredHousing, navigate]);

	if (!filteredHousing) {
		return null;
	}

	return <DisplaySingleHousing />;
}

export default SingleRental;